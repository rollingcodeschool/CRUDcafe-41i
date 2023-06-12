import { Button } from "react-bootstrap";
import Swal from "sweetalert2";


const ItemProducto = ({producto}) => {

  const borrarProducto = ()=>{
    Swal.fire({
      title: `¿Esta seguro de borrar el producto ${producto.nombreProducto}?`,
      text: "No se puede revertir este paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Producto eliminado',
          `El ${producto.nombreProducto} fue eliminado correctamente`,
          'success'
        )
      }
    })
  }

   return (
    <tr>
      {/* <td>{props.producto._id}</td> */}
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>
        <Button className="btn btn-warning">Editar</Button>
        <Button variant="danger" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
