import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap"
import { useForm } from "react-hook-form"; 
import { consultaCrearArticulo } from "../../helpers/queries";
import Swal from "sweetalert2";
import React, { useState } from 'react';


const CrearArticulo = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

     const onSubmit = (articuloNuevo) => {
         console.log(articuloNuevo)
         const articuloNuevoNuevo = {...articuloNuevo, ingredientes:items, procedimiento:itemsProc }
         console.log(`el producto nuevo con los ingredientes y los procedimientos es : ${articuloNuevoNuevo}`)
         console.log("paso la validacion")
         // realizar la peticion que agrewga producto a la api
         consultaCrearArticulo(articuloNuevoNuevo).then((respuesta)=>{
             if(respuesta.status === 201){
                 Swal.fire(
                     'Agregado!',
                     `El producto ${articuloNuevoNuevo.receta} fue creado`,
                     'success'
                 )
                 reset()
                 setItems([])
                 setItemsProc([])
             } else{
                 Swal.fire(
                     'Error!',
                     `No se pudo procesar su peticion`,
                     'error'
                 )
             }
         })
     }

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
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre de la receta*</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Cafe" maxLength={30} {
                        ...register('receta', {
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
                        {errors.receta?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Tiempo de preparación* (minutos)</Form.Label>                       
                                <Form.Control type="number" placeholder="ej: 20" min={1} max={600}  {
                                    ...register('minutos', {
                                        required: 'El campo es obligatorio',
                                        pattern: {
                                            value: /^(?:[1-9]|[1-9]\d{1,2}|[1-5]\d{2}|600)(?:\.\d+)?$/,
                                            message: "Debe ingresar un numero entre 1 y 600"
                                        }
                                    })
                                } />
                                <Form.Text className="text-danger">
                                    {errors.minutos?.message}
                                </Form.Text>
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
                                value: 600,
                                message: "Este campo debe tener como maximo 600 caracteres"
                            },
                             pattern: {
                                 value: /.*\.(jpg|png|jpeg)$/,
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
                        <option value="Plato de entrada">Plato de entrada</option>
                        <option value="Plato principal">Plato principal</option>
                        <option value="Postre">Postre</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.categoria?.message}

                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripcion*</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Ingrese una descripcion del articulo"
                        style={{ height: '100px' }}
                        maxLength={500} {
                        ...register('descripcion', {
                            required: 'El campo es obligatorio',
                            minLength: {
                                value: 5,
                                message: "Este campo debe tener como minimo 5 caracteres"
                            },
                            maxLength: {
                                value: 500,
                                message: "Este campo debe tener como maximo 500 caracteres"
                            },
                        })
                        } />
                    <Form.Text className="text-danger">
                        {errors.descripcion?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ingredientes*</Form.Label>
                    <Form.Control
                        className="h-100"
                        type="text"
                        value={itemInputValue}
                        onChange={handleItemInputChange}
                    />
                    <Button className="btn btn-secondary mt-2" onClick={handleAgregarItemClick}>Agregar</Button>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                {item}
                                <button className="btn btn-outline-danger mx-3 my-1" onClick={() => handleEliminarItemClick(index)}>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Prodecimiento*</Form.Label>
                    <Form.Control
                            className="h-100"

                        type="text"
                        value={itemInputValueProc}
                        onChange={handleItemInputChangeProc}
                    />
                    <Button className="btn btn-secondary mt-2" onClick={handleAgregarItemClickProc}>Agregar</Button>
                    <ol>
                        {itemsProc.map((item, index) => (
                            <li key={index}>
                                {item}
                                <button className="btn btn-outline-danger my-1 mx-3" onClick={() => handleEliminarItemClickProc(index)}>
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