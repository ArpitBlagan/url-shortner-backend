<h3>Hey there,</h3>
<p>About the project:</p>

Create a .env and have
PORT and DATABASE_URL these to variable only

For postgres DB you can use neonDB

<h4>or</h4> 
For locally running it use docker
ex:

```bash
    docker  run -d -p 5432:5432 -e POSTGRES_PASSWORD=yoursecretpassword postgres
```

and url to connect to it is

```bash
   postgresql://postgres:mysecretpassword@localhost:5432/mydatabase
```

other part is simple.
