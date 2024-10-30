# Cut & Style

Gestión de Peluquerías - MVP
Este proyecto es un MVP (Producto Mínimo Viable) de una plataforma web para la gestión de peluquerías. La aplicación permite a los dueños de peluquerías manejar las citas de sus clientes, administrar el personal, gestionar los servicios ofrecidos y visualizar reportes básicos sobre las operaciones diarias.

## Características principales:

- Mapa con la localizacion de las peluquerias disponibles.

  ![image](https://github.com/user-attachments/assets/26f06435-25c1-42bc-8465-abaf3d131492)


- Gestión de citas: Permite a los clientes reservar citas con los estilistas disponibles en la peluquería.

- Administración del personal: Permite al administrador añadir, editar o eliminar empleados.

- Gestión de servicios: Los administradores pueden gestionar los servicios ofrecidos, incluyendo precios y tiempos estimados.

- Panel de reportes: Ofrece una visión básica de las citas y los ingresos generados.

- Notificaciones por correo electrónico: Envía recordatorios automáticos a los clientes para sus citas.

Uso

- Administrar peluquería: Los administradores pueden gestionar las citas, el personal y los servicios.

- Reservar citas: Los clientes pueden seleccionar un servicio y un estilista, y luego reservar una cita.

- Panel de control: Los administradores pueden visualizar un resumen de las citas diarias, los ingresos generados y los empleados disponibles.

Deploy Frontend

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
