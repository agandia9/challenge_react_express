END POINTS API-CLIENT
    
    // login LOGIN: necesitaremos el email y el password para devolver el token del usuario

    login(username,password)

    // listUsers: devolvera todos los usuarios de la BBDD

    listUsers(token)

    // getUser: devolvera un usuario en concreto de la base de datos, deveremos pasarle el token

    getUser(id,token)

    // createUsers: creara un usuario nuevo en la BBDD

    createUser(name,surname,email,password,permissions)

    // updateUsers: modificara un usuario en concreto de la BBDD

    updateUsers(id,name,surname,email,password,permissions)

    // deleteUsers: eliminara un usuario en concreto de la BBDD
    
    deleteUsers(id)

