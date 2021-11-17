const Login = props => {
  return (
    <div class="body">

      <div class="login">
          <h1 class="titulo">Loguearse</h1>
            <form action="/login" method="post">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Ingrese su mail</label>
                <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input name="password" type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <button class="continuar" type="submit" class="btn btn-primary">Continuar</button>
            </form>
        </div>

        <div class="registrarse">
            <h1 class="titulo">Registrarse</h1>
              <form action="http://localhost:3000/register" method="post">
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Ingrese su nombre y apellido</label>
                  <input name="name" type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Ingrese la/s materias que da</label>
                  <input name="subjects" type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Ingrese su mail</label>
                  <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                  <input name="password" type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Repita Contraseña</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button class="continuar" type="submit" class="btn btn-primary">Continuar</button>
              </form>
          </div>

      </div>
  );
};

export default Login;
