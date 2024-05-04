Hey there,
About the project:
For postgres you can use neonDB or local using docker
ex:

```bash
    docker  run -d -p 5432:5432 -e POSTGRES_PASSWORD=yoursecretpassword postgres
```

and url to connect to it is

```bash
   postgresql://postgres:mysecretpassword@localhost:5432/mydatabase
```

other part is simple i think.
