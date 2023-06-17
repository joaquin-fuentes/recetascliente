import { Form, Button, Container, Card } from "react-bootstrap";
import { login } from "../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const Login = ({setUsuarioLogueado}) => {
     const {
         register,
         handleSubmit,
         formState: { errors },
         reset
     } = useForm();

     const navegacion = useNavigate()

     const onSubmit = (usuario) => {
         login(usuario).then((respuesta) => {
             if (respuesta) {
                 //debo loguear al usuario
                 sessionStorage.setItem("usuarioLogueado", JSON.stringify(respuesta))
                 setUsuarioLogueado(respuesta)
                 Swal.fire("Bienvenido", "Ingreso correcto", "success")
                 navegacion("/")

             } else {
                 // mostrar mensaje de error, usuario o password incorrectos
                 Swal.fire("Error", "Email o password incorrecto", "error")
             }
         })
     }

    return (
        <Container className="main ">
            <Card className=" bg-fomrulario my-4 p-5 letraBlanca">
                <Card.Header as="h5" className="tituloLogin">Login</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese un email" maxLength={50} minLength={3} {
                                ...register('email', {
                                    //validaciones
                                    required: 'El email es obligatorio',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Debe ingresar un email válido"
                                    }
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.email?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" maxLength={20} minLength={6} {
                                ...register('password', {
                                    required: 'El password es obligatorio',
                                    minLength: {
                                        value: 6,
                                        message: "El password contener por lo menos 6 caracteres"
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "El password debe contener como maximo 20 caracteres"
                                    },
                                    pattern: {
                                        value: /^.{6,20}$/,
                                        message: "El password debe tener entre 6 y 20 caracteres"
                                    }
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.password?.message}
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;