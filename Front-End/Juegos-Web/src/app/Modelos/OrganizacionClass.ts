export class OrganizacionClass{
  constructor(
    public ruc?: string,
    public nombre?: string,
    public correo?: string,
    public contrasenia?: string,
    public direccion?: string,
    public telefono?: number,
    public descripcion?: number,
    public createdAt?:Date,
    public updatedAt?:Date,
    public id?:string,
    public editar?:boolean
  ){

  }
}
