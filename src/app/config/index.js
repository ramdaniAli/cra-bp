const GRID_DEFAULT_LOCALE_TEXT = {
  // Root
  noRowsLabel: "Aucun résultat trouvé.",
  noResultsOverlayLabel: "Aucun résultat trouvé.",
  errorOverlayDefaultLabel: "Une erreur s'est produite.",

  // Density selector toolbar button text
  toolbarDensity: "Densité",
  toolbarDensityLabel: "Densité",
  toolbarDensityCompact: "Compacte",
  toolbarDensityStandard: "Standard",
  toolbarDensityComfortable: "Confortable",

  // Columns selector toolbar button text
  toolbarColumns: "Colonnes",
  toolbarColumnsLabel: "Sélectionner des colonnes",

  // Filters toolbar button text
  toolbarFilters: "Filtres",
  toolbarFiltersLabel: "Afficher les filtres",
  toolbarFiltersTooltipHide: "Masquer les filtres",
  toolbarFiltersTooltipShow: "Afficher les filtres",
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} filtres actifs` : `${count} filtres actifs`,

  // Export selector toolbar button text
  toolbarExport: "Exportation",
  toolbarExportLabel: "Exportation",
  toolbarExportCSV: "Télécharger au format CSV",
  toolbarExportPrint: "Imprimer",

  // Columns panel text
  columnsPanelTextFieldLabel: "Rechercher une colonne",
  columnsPanelTextFieldPlaceholder: "Titre de la colonne",
  columnsPanelDragIconLabel: "réorganiser les colonnes",
  columnsPanelShowAllButton: "Afficher tout",
  columnsPanelHideAllButton: "Masquer tout",

  // Filter panel text
  filterPanelAddFilter: "Ajouter un filtre",
  filterPanelDeleteIconLabel: "Effacer",
  filterPanelOperators: "Opérateurs",
  filterPanelOperatorAnd: "Et",
  filterPanelOperatorOr: "Ou",
  filterPanelColumns: "Colonnes",
  filterPanelInputLabel: "valeur",
  filterPanelInputPlaceholder: "Valeur du filtre",

  // Filter operators text
  filterOperatorContains: "contient",
  filterOperatorEquals: "équivaut à",
  filterOperatorStartsWith: "commence avec",
  filterOperatorEndsWith: "se termine par",
  filterOperatorIs: "équivaut à",
  filterOperatorNot: "tout sauf",
  filterOperatorAfter: "est après",
  filterOperatorOnOrAfter: "équivaut à ou après",
  filterOperatorBefore: "est avant",
  filterOperatorOnOrBefore: "équivaut à ou avant",
  filterOperatorIsEmpty: "est vide",
  filterOperatorIsNotEmpty: "n'est pas vide",

  // Filter values text 🧨
  filterValueAny: "tout",
  filterValueTrue: "true",
  filterValueFalse: "false",

  // Column menu text
  columnMenuLabel: "Menu",
  columnMenuShowColumns: "Afficher les colonnes",
  columnMenuFilter: "Filtrer",
  columnMenuHideColumn: "Masquer",
  columnMenuUnsort: "Ne pas trier",
  columnMenuSortAsc: "Trier par ASC",
  columnMenuSortDesc: "Trier par DESC",

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} filtres actifs` : `${count} filtres actifs`,
  columnHeaderFiltersLabel: "Afficher les filtres",
  columnHeaderSortIconLabel: "Trier",

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} lignes sélectionnées`
      : `${count.toLocaleString()} lignes sélectionnées`,

  // Total rows footer text
  footerTotalRows: "Total des rangées:",

  // Total visible rows footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} sur ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: "Sélection",

  // Boolean cell text 🧨
  booleanCellTrueLabel: "true",
  booleanCellFalseLabel: "false",

  // Actions cell more text
  actionsCellMore: "plus",

  // Used core components translation keys
  MuiTablePagination: {},
};


const title = "React PWA";

const email = "ali.ramdani.dz@viacesi.fr";

const repository = "https://github.com/suren-atoyan/react-pwa";

const messages = {
  app: {
    crash: {
      title: "Oooops... Sorry, I guess, something went wrong. You can:",
      options: {
        email: `contact with author by this email - ${email}`,
        reset: "Press here to reset the application",
      },
    },
  },
  loader: {
    fail: "Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea",
  },
  images: {
    failed: "something went wrong during image loading :(",
  },
  404: "Hey bro? What are you looking for?",
};

const dateFormat = "MMMM DD, YYYY";

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: "/cover.png",
  description: "Starter kit for modern web applications",
};

const giphy404 = "https://giphy.com/embed/xTiN0L7EW5trfOvEk0";

export {
  loader,
  dateFormat,
  messages,
  repository,
  email,
  title,
  defaultMetaTags,
  giphy404,
  GRID_DEFAULT_LOCALE_TEXT
};
