# Cut & Style

![image](https://github.com/user-attachments/assets/6b748a47-4fd1-47fe-b5c0-97f4d6e615b0)


Gestión de Peluquerías - MVP
Este proyecto es un MVP (Producto Mínimo Viable) de una plataforma web para la gestión de peluquerías. La aplicación permite a los dueños de peluquerías manejar las citas de sus clientes, administrar el personal, gestionar los servicios ofrecidos y visualizar reportes básicos sobre las operaciones diarias.

![image](https://github.com/user-attachments/assets/63d096fb-7e73-4949-aead-3035e00fb3d5)


## Características principales:

![image](https://github.com/user-attachments/assets/26f06435-25c1-42bc-8465-abaf3d131492)
  
- Varios Tipos de inicio de sesion: uno para los usuarios, otro para los barberos, y uno para el Admin (usuario:Cjsfranko@gmail.com pass:123)

![image](https://github.com/user-attachments/assets/deaad28c-4c88-4b02-ae7e-58abb36496d0)

- Mapa con la localizacion de las peluquerias disponibles.

![image](https://github.com/user-attachments/assets/ed6abed8-e076-4fae-9b64-00b4865167b5)

- Gestión de citas: Permite a los clientes reservar citas con los estilistas disponibles en la peluquería.

![2f3fa7e4-6246-4f65-9ad0-0ffb3d67ce9a](https://github.com/user-attachments/assets/7c4cbe98-dd0e-4bbd-892e-961e6761d407)

- Administración del personal: Permite al administrador añadir, editar o eliminar empleados.

![vista admin de barberos](https://github.com/user-attachments/assets/cf117ee8-440f-4e39-b663-26e4e0b5f918)

- Administración de los usuarios: Permite al administrador añadir, editar o eliminar usuarios.

![vista admin usuarios](https://github.com/user-attachments/assets/d9f053df-aa10-4b49-9b29-fd0c54c3e5b8)

- Administración de las peluquerias disponibles: Permite al administrador añadir, editar o eliminar peluquerias.

![vista de admin de las peluquerias disponibles](https://github.com/user-attachments/assets/b78ce833-c356-421e-949e-64e1a710687d)

- El Administrador puede ver la progrmacion de los turnos para cada barberia con los servicios prestados, usuario, horario, etc.

![programacion de turnos](https://github.com/user-attachments/assets/7ff775d2-b88d-41ea-bea2-c6306c591e7e)

- Gestión de servicios: Los administradores pueden gestionar los servicios ofrecidos, incluyendo precios.

![image](https://github.com/user-attachments/assets/efe0ee0e-803b-40cc-b21b-977499e4ce44)

- Panel de citas para los barberos

![vista del pelucquero de sus turnos](https://github.com/user-attachments/assets/3aed6a7d-54a1-4a67-b026-c03186c5d471)



Uso

- Administrar peluquería: Los administradores pueden gestionar las citas, el personal y los servicios.

- Reservar citas: Los clientes pueden seleccionar un servicio y un estilista, y luego reservar una cita.

- Panel de control: Los administradores pueden visualizar un resumen de las citas diarias, los ingresos generados y los empleados disponibles.

## Deploy Frontend

[Cut & Style](http://143.198.98.157:3000/)

## Testing

[Plan de Pruebas](https://docs.google.com/document/d/1Nm4LBLJhNogloKlYSn5NzDM_EXCm4ldd5hQdiUpeF0M/edit?usp=sharing)

[Asignacion de Tareas](https://docs.google.com/spreadsheets/d/18w2gIcq4hrf0KqOoz_SdIUqFBN7WTaXRO4Si-27eXDk/edit?gid=0#gid=0)

[Historias de Usuario-Casos de Prueba-Ejecuciones-Incidencias-Grafico](https://docs.google.com/spreadsheets/d/1IeTGQxmWhDqV2Tqto9KcKhaz-luSz5x3/edit?usp=sharing&ouid=107763075014786345298&rtpof=true&sd=true)

[Planilla de Testing Exploratorio](https://docs.google.com/spreadsheets/d/1nJxGLKjVCeYYQzORKx69tH6SLHTqqoSA/edit?usp=sharing&ouid=107763075014786345298&rtpof=true&sd=true)

## Roles del equipo

| ROl  | Encargado | Tecnologias |
| ---- | --------- | ----------- |
| P. Manager  | `Amin` | Trello, Google sheets y docs |
| Designer | `Franko` `Emanuel` | Inspiracion en diseños |
| Frontend | `Franko` `Emanuel` | React, javascript, css |
| Backend | `Josafat` | Express, Typescript, Node, JWT |
| Testing | `Amin` | Google sheets, Excel |
| Database | `Josafat` | PostgresSQL |
| Deployment | `Josafat` | vercel o Digital ocean (Docker, Nginx) |


![image](https://github.com/user-attachments/assets/73d49c6d-756c-4a33-9b71-332e43243b49)


## Inicializar prisma

```bash
    npx prisma init
```

```bash
    npx prisma migrate dev --name init
```

```bash
    npx prisma generate
```


###### Made with 💖 by c21-44-t-node-react team 🇦🇷 🇲🇽
