import Swal from "sweetalert2";

const alertSuccess = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Success",
    showConfirmButton: false,
    timer: 1500,
  });
};

export { alertSuccess };
