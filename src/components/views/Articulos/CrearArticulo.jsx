import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap"
import { useForm } from "react-hook-form";
// import { consultaCrearArticulo } from "../../helpers/queries";
import Swal from "sweetalert2";
import React, { useState } from 'react';


const CrearArticulo = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    // const onSubmit = (productoNuevo) => {
    //     console.log(productoNuevo)
    //     console.log("paso la validacion")
    //     // realizar la peticion que agrewga producto a la api
    //     consultaCrearArticulo(productoNuevo).then((respuesta)=>{
    //         if(respuesta.status === 201){
    //             Swal.fire(
    //                 'Agregado!',
    //                 `El producto ${productoNuevo.nombreProducto} fue creado`,
    //                 'success'
    //             )
    //             reset()
    //         } else{
    //             Swal.fire(
    //                 'Error!',
    //                 `No se pudo procesar su peticion`,
    //                 'error'
    //             )
    //         }
    //     })
    // }

    const [itemInputValue, setItemInputValue] = useState('');
    const [items, setItems] = useState([]);
    const [itemInputValueProc, setItemInputValueProc] = useState('');
    const [itemsProc, setItemsProc] = useState([]);

    const handleAgregarItemClick = (event) => {
        event.preventDefault();

        if (itemInputValue.trim() !== '') {
            setItems((prevItems) => [...prevItems, itemInputValue]);
            setItemInputValue('');
        }
        console.log(items)

    };
    const handleItemInputChange = (event) => {
        setItemInputValue(event.target.value);
    };
    const handleEliminarItemClick = (index) => {
        setItems((prevItems) => {
            const newItems = [...prevItems];
            newItems.splice(index, 1);
            return newItems;
        });
    };
    
    const handleAgregarItemClickProc = (event) => {
        event.preventDefault();

        if (itemInputValueProc.trim() !== '') {
            setItemsProc((prevItems) => [...prevItems, itemInputValueProc]);
            setItemInputValueProc('');
        }
        console.log(itemsProc)
    };
    const handleItemInputChangeProc = (event) => {
        setItemInputValueProc(event.target.value);
    };
    const handleEliminarItemClickProc = (index) => {
        setItemsProc((prevItems) => {
            const newItems = [...prevItems];
            newItems.splice(index, 1);
            return newItems;
        });
    };
    

    return (
        <Container className="main bg-fomrulario my-4 p-5 letraBlanca">
            <h2>Nuevo Articulo</h2>
            <hr />
            <Form onSubmit={handleSubmit()}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre de la receta*</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Cafe" maxLength={30} {
                        ...register('nombreProducto', {
                            required: 'El campo es obligatorio',
                            minLength: {
                                value: 2,
                                message: "Este campo debe tener como minimo 2 caracteres"
                            },
                            maxLength: {
                                value: 30,
                                message: "Este campo debe tener como maximo 30 caracteres"
                            },
                            pattern: {
                                value: /^.{2,30}$/,
                                message: "El password debe tener entre 6 y 20 caracteres"
                            }
                        })
                    } />
                    <Form.Text className="text-danger">
                        {errors.nombreProducto?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Tiempo de preparación*</Form.Label>
                    <Row className="align-items-center">
                        <Col sm={3} className="my-1">
                            <InputGroup>
                                <InputGroup.Text>Horas</InputGroup.Text>
                                <Form.Control type="number" placeholder="ej: 1" min={0} max={8} value={0}{
                                    ...register('horas', {
                                        required: 'El campo es obligatorio',
                                        pattern: {
                                            value: /^[0-8]$/,
                                            message: "Debe ingresar un numero entre 0 y 8"
                                        }
                                    })
                                } />
                                <Form.Text className="text-danger">
                                    {errors.horas?.message}
                                </Form.Text>
                            </InputGroup>
                        </Col>
                        <Col sm={3} className="my-1">
                            <InputGroup>
                                <InputGroup.Text>Minutos</InputGroup.Text>
                                <Form.Control type="number" placeholder="ej: 20" min={0} max={59} value={0} {
                                    ...register('minutos', {
                                        required: 'El campo es obligatorio',
                                        pattern: {
                                            value: /^[0-59]$/,
                                            message: "Debe ingresar un numero entre 0 y 59"
                                        }
                                    })
                                } />
                                <Form.Text className="text-danger">
                                    {errors.minutos?.message}
                                </Form.Text>
                            </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control type="text" placeholder="Ej: https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" maxLength={250} {
                        ...register('imagen', {
                            required: 'El campo es obligatorio',
                            minLength: {
                                value: 5,
                                message: "Este campo debe tener como minimo 5 caracteres"
                            },
                            maxLength: {
                                value: 250,
                                message: "Este campo debe tener como maximo 250 caracteres"
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9]+\.(png|jpg)$/,
                                message: "La imagen debe estar en formaro .png o .jpg"
                            }
                        })
                    } />
                    <Form.Text className="text-danger">
                        {errors.imagen?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select aria-label="Default select example" {
                        ...register('categoria', {
                            required: 'Debe seleccionar una categoria',
                        })}>
                        <option value="">Seleccione una opcion</option>
                        <option value="1">opcion 1</option>
                        <option value="2">opcion 2</option>
                        <option value="3">opcion 3</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.categoria?.message}

                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ingredientes*</Form.Label>
                    <input
                        type="text"
                        value={itemInputValue}
                        onChange={handleItemInputChange}
                    />
                    <button className="btn btn-secondary m-1" onClick={handleAgregarItemClick}>Agregar</button>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                {item}
                                <button className="btn btn-outline-danger m-1" onClick={() => handleEliminarItemClick(index)}>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                   </ul>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Prodecimiento*</Form.Label>
                    <input
                        type="text"
                        value={itemInputValueProc}
                        onChange={handleItemInputChangeProc}
                    />
                    <button className="btn btn-secondary m-1" onClick={handleAgregarItemClickProc}>Agregar</button>
                    <ol>
                        {itemsProc.map((item, index) => (
                            <li key={index}>
                                {item}
                                <button className="btn btn-outline-danger m-1" onClick={() => handleEliminarItemClickProc(index)}>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                   </ol>
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2">
                    Guardar
                </Button>
            </Form>
        </Container>
    );
};

export default CrearArticulo;