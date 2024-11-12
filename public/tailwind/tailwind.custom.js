let buttons = {
  ".btn-primary": {
    padding: "0.4rem 1rem",
    backgroundColor: "#09af72",
    color: "#fff",
    fontWeight: "400",
    borderRadius: "0.375rem",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#088e5b",
    },
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      backgroundColor: "#06784d",
    },
    "&:disabled": {
      backgroundColor: "#00794b",
      color: "#fff",
      cursor: "not-allowed",
      opacity: "0.6",
    },
  },
  ".btn-outline-primary": {
    padding: "0.35rem 1rem",
    backgroundColor: "transparent",
    color: "#09af72",
    fontWeight: "400",
    borderRadius: "0.375rem",
    border: "1px solid #09af72",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#09af72",
      color: "#fff",
    },
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      backgroundColor: "#06784d",
      color: "#fff",
    },
    "&:disabled": {
      backgroundColor: "transparent",
      color: "#09af72",
      cursor: "not-allowed",
      opacity: "0.6",
    },
  },
  ".btn-outline-secondary": {
    padding: "0.35rem 1rem",
    backgroundColor: "transparent",
    color: "#6c757d",
    fontWeight: "400",
    borderRadius: "0.375rem",
    border: "1px solid #6c757d",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#6c757d",
      color: "#fff",
    },
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      backgroundColor: "#6c757d",
      color: "#fff",
    },
    "&:disabled": {
      backgroundColor: "transparent",
      color: "#6c757d",
      cursor: "not-allowed",
      opacity: "0.6",
    },
  },
  ".btn-secondary": {
    padding: "0.35rem 1rem",
    backgroundColor: "#6c757d",
    color: "#fff",
    fontWeight: "400",
    borderRadius: "0.375rem",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#5a6268",
    },
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      backgroundColor: "#545b62",
    },
    "&:disabled": {
      backgroundColor: "#6c757d",
      color: "#fff",
      cursor: "not-allowed",
      opacity: "0.6",
    },
  },
  ".btn-save": {
    padding: "0.4rem 1.5rem",
    backgroundColor: "#3e5d9a",
    color: "#fff",
    fontWeight: "400",
    borderRadius: "0.375rem",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#294479",
      color: "#fff",
    },
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      backgroundColor: "#294479",
      color: "#fff",
    },
    "&:disabled": {
      backgroundColor: "transparent",
      color: "#09af72",
      backgroundColor: "#294479",
    },
    "&:disabled": {
      backgroundColor: "#5d77ab",
      color: "#fff",
      cursor: "not-allowed",
      opacity: "0.6",
    },
  },
  ".btn-outline-save": {
    padding: "0.3rem 0.8rem",
    backgroundColor: "transparent",
    color: "#3e5d9a",
    fontWeight: "400",
    borderRadius: "0.375rem",
    border: "1px solid #3e5d9a",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#3e5d9a",
      color: "#fff",
    },
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      backgroundColor: "#294479",
      color: "#fff",
    },
    "&:disabled": {
      backgroundColor: "transparent",
    },
  },
};

let system = {
  ".container": {
    maxWidth: "1140px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  ".container-fluid": {
    width: "96%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  ".bg-glass": {
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    "-webkitBackdropFilter": "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    padding: "0rem .2rem",
    color: "white",
  },
};

let formControls = {
  ".form-control": {
    border: "1px solid #ced4da",
    borderRadius: "0.25rem",
    padding: "0.5rem",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    width: "100%",

    "&:focus": {
      outline: "none",
    },

    "&:disabled": {
      opacity: "0.6",
      cursor: "not-allowed",
    },

    "&:invalid": {
      border: "1px solid red",
      borderRadius: "0.25rem",
      padding: "0.5rem",
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
      color: "red",
      backgroundColor: "#f8d7da",
      fontSize: "0.875rem",
      fontWeight: "400",
      lineHeight: "1.5",
      textAlign: "left",
    },

    "&::placeholder": {
      color: "#6c757d",
      opacity: "1",
    },

    "&:focus::placeholder": {
      color: "#6c757d",
      opacity: "1",
    },

    "&:disabled::placeholder": {
      color: "#6c757d",
      opacity: "1",
    },

    "&:invalid::placeholder": {
      color: "#6c757d",
      opacity: "1",
    },

    "&:valid::placeholder": {
      color: "#6c757d",
      opacity: "1",
    },

    "&:invalid:focus": {
      outline: "none",
    },

    "&:valid:focus": {
      outline: "none",
    },

    "&:disabled:focus": {
      outline: "none",
    },
  },
  ".form-select": {
    padding: "0.375rem 2.25rem 0.375rem 0.75rem",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#212529",
    backgroundColor: "#fff",
    backgroundPosition: "right 0.75rem center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "16px 12px",
    border: "1px solid #ced4da",
    borderRadius: "0.375rem",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    "&:focus": {
      borderColor: "#09af72",
      outline: "0",
      boxShadow: "none",
      borderColor: "#09af72",
    },
    "&:disabled": {
      backgroundColor: "#e9ecef",
      opacity: "1",
    },
    "&:invalid": {
      borderColor: "#dc3545",
    },
  },
  ".form-control-search": {
    position: "relative",
    width: "100%",
    padding: "0.5rem 0.5rem 0.5rem 2rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "0",
    outline: "none",
    boxShadow: "none",
    "&:focus": {
      border: "none",
    },
  },
  ".dropdown-menu": {
    border: "none",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
    borderRadius: "0.25rem",
    padding: "0.5rem",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    width: "100%",
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      outline: "none",
    },
    "&:disabled": {
      outline: "none",
    },
  },
};

module.exports = {
  ...buttons,
  ...formControls,
  ...system,
};
