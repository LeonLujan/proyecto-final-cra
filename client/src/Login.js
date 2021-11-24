const Login = props => {
  return (
    <div class="body">

      <div class="login">
          <h1 className="red-text text-darken-4">Loguearse</h1>
            <form action="/login" method="post">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Ingrese su mail</label>
                <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <button id="boton" className="btn waves-effect waves-light red darken-4" type="submit" name="action">Continuar
                  <i class="material-icons right">send</i>
              </button>
            </form>
        </div>

        <div class="registrarse">
            <h1 class="titulo">Registrarse</h1>
              <form action="http://localhost:3000/register" method="post">
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Ingrese su nombre y apellido</label>
                  <input name="name" type="name" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Ingrese su mail</label>
                  <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                  <input name="password" type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button className="btn waves-effect waves-light red darken-4" type="submit" name="action">Submit
                  <i class="material-icons right">send</i>
                </button>
              </form>
          </div>

      </div>
  );
};

export default Login;
