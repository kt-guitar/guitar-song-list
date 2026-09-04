const songList = document.getElementById("songList");
const summary = document.getElementById("summary");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const filterButtons = document.querySelectorAll(".filter-button");
const lastUpdated = document.getElementById("lastUpdated");

let currentFilter = "all";
const collapsedAlbums = new Set();

function isPosted(song) {
  return Boolean(song.date);
}

function formatDate(dateString) {
  if (!dateString) return "—";
  return dateString.replaceAll("-", "/");
}

function difficultyStars(value) {
  if (!value) return "—";

  return "★".repeat(value) + "☆".repeat(5 - value);
}

function albumIndex(album) {
  const index = albumOrder.indexOf(album);

  return index === -1
    ? Number.MAX_SAFE_INTEGER
    : index;
}

function normalize(text) {
  return String(text).toLocaleLowerCase("ja");
}

function getVisibleSongs() {
  const keyword = normalize(searchInput.value.trim());

  let result = songs.filter((song) => {
    const posted = isPosted(song);

    const matchesFilter =
      currentFilter === "all" ||
      (currentFilter === "posted" && posted) ||
      (currentFilter === "unposted" && !posted);

    const matchesSearch =
      keyword === "" ||
      normalize(song.title).includes(keyword) ||
      normalize(song.album).includes(keyword);

    return matchesFilter && matchesSearch;
  });

  const sortType = sortSelect.value;

  result.sort((a, b) => {

    if (sortType === "title") {
      return a.title.localeCompare(b.title, "ja");
    }

    if (
      sortType === "date-desc" ||
      sortType === "date-asc"
    ) {
      const aDate =
        a.date ? new Date(a.date).getTime() : null;

      const bDate =
        b.date ? new Date(b.date).getTime() : null;

      if (aDate === null && bDate === null) {
        return a.title.localeCompare(b.title, "ja");
      }

      if (aDate === null) return 1;
      if (bDate === null) return -1;

      return sortType === "date-desc"
        ? bDate - aDate
        : aDate - bDate;
    }

    const albumCompare =
      albumIndex(a.album) - albumIndex(b.album);

    if (albumCompare !== 0) {
      return albumCompare;
    }

    return songs.indexOf(a) - songs.indexOf(b);
  });

  return result;
}

function groupSongsByAlbum(visibleSongs) {
  const groups = new Map();

  visibleSongs.forEach((song) => {
    if (!groups.has(song.album)) {
      groups.set(song.album, []);
    }

    groups.get(song.album).push(song);
  });

  return groups;
}

function renderSummary() {
  const postedCount = songs.filter(isPosted).length;

  summary.textContent =
    `全${songs.length}曲中 ${postedCount}曲投稿済み`;

  // 難しさ目安の補足
  if (!document.querySelector(".difficulty-note")) {
    const note = document.createElement("p");

    note.className = "difficulty-note";

    note.textContent =
      "※難しさ目安はKT_Gtの主観によるものです。★が多いほど難しい目安です。";

    summary.insertAdjacentElement("afterend", note);
  }
}

function createSongRow(song) {
  const tr = document.createElement("tr");

  const posted = isPosted(song);

  tr.innerHTML = `
    <td class="song-title">
      ${escapeHtml(song.title)}
    </td>

    <td>
      <span class="status ${
        posted
          ? "status-posted"
          : "status-unposted"
      }">
        ${
          posted
            ? "投稿済み"
            : "未投稿"
        }
      </span>
    </td>

    <td class="date">
      ${
        song.date
          ? escapeHtml(formatDate(song.date))
          : '<span class="no-date">—</span>'
      }
    </td>

    <td
      class="difficulty"
      aria-label="${
        song.difficulty
          ? `難しさ目安 ${song.difficulty}/5`
          : "難しさ目安 未設定"
      }"
    >
      ${
        song.difficulty
          ? `<span class="difficulty-stars">
              ${difficultyStars(song.difficulty)}
            </span>`
          : '<span class="no-difficulty">—</span>'
      }
    </td>

    <td>
      ${
        song.youtube
          ? `
            <a
              class="youtube-link"
              href="${escapeAttribute(song.youtube)}"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          `
          : '<span class="no-link">—</span>'
      }
    </td>
  `;

  return tr;
}

function createAlbumSection(
  album,
  albumSongs
) {

  const allAlbumSongs =
    songs.filter(
      (song) => song.album === album
    );

  const postedCount =
    allAlbumSongs.filter(isPosted).length;

  const totalCount =
    allAlbumSongs.length;

  const section =
    document.createElement("section");

  section.className = "album";

  if (
    collapsedAlbums.has(album)
  ) {
    section.classList.add(
      "is-collapsed"
    );
  }

  const headerButton =
    document.createElement("button");

  headerButton.className =
    "album-header";

  headerButton.type = "button";

  headerButton.setAttribute(
    "aria-expanded",
    String(
      !collapsedAlbums.has(album)
    )
  );

  headerButton.innerHTML = `
    <span class="album-title-wrap">

      <span
        class="chevron"
        aria-hidden="true"
      ></span>

      <span class="album-name">
        ${escapeHtml(album)}
      </span>

    </span>

    <span class="album-count">
      ${postedCount} / ${totalCount}曲
    </span>
  `;

  headerButton.addEventListener(
    "click",
    () => {

      if (
        collapsedAlbums.has(album)
      ) {
        collapsedAlbums.delete(album);
      } else {
        collapsedAlbums.add(album);
      }

      render();
    }
  );

  const tableWrap =
    document.createElement("div");

  tableWrap.className =
    "album-table-wrap";

  const table =
    document.createElement("table");

  table.className =
    "song-table";

  table.innerHTML = `
    <colgroup>
      <col>
      <col>
      <col>
      <col>
      <col>
    </colgroup>

    <thead>
      <tr>
        <th>曲名</th>
        <th>状態</th>
        <th>投稿日</th>
        <th>難しさ目安</th>
        <th>動画</th>
      </tr>
    </thead>

    <tbody></tbody>
  `;

  const tbody =
    table.querySelector("tbody");

  albumSongs.forEach(
    (song) => {
      tbody.appendChild(
        createSongRow(song)
      );
    }
  );

  tableWrap.appendChild(table);

  section.append(
    headerButton,
    tableWrap
  );

  return section;
}

function render() {

  const visibleSongs =
    getVisibleSongs();

  songList.innerHTML = "";

  if (
    visibleSongs.length === 0
  ) {
    songList.innerHTML = `
      <div class="empty-state">
        該当する曲がありません。
      </div>
    `;

    return;
  }

  const groups =
    groupSongsByAlbum(
      visibleSongs
    );

  const groupEntries =
    [...groups.entries()];

  if (
    sortSelect.value === "album"
  ) {
    groupEntries.sort(
      (a, b) =>
        albumIndex(a[0]) -
        albumIndex(b[0])
    );
  }

  groupEntries.forEach(
    ([album, albumSongs]) => {

      songList.appendChild(
        createAlbumSection(
          album,
          albumSongs
        )
      );
    }
  );
}

function escapeHtml(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll(
      "'",
      "&#039;"
    );
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

filterButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        currentFilter =
          button.dataset.filter;

        filterButtons.forEach(
          (item) => {

            item.classList.toggle(
              "is-active",
              item === button
            );
          }
        );

        render();
      }
    );
  }
);

searchInput.addEventListener(
  "input",
  render
);

sortSelect.addEventListener(
  "change",
  render
);

renderSummary();
render();

const today = new Date();

lastUpdated.textContent =
  today.toLocaleDateString(
    "ja-JP",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }
  );
