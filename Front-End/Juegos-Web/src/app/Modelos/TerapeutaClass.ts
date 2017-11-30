export class TerapeutaClass{
  constructor(
    public cedula?: string,
    public nombre?: string,
    public correo?: string,
    public contrasenia?: string,
    public direccion?: string,
    public celular?: number,
    public idOrganizacion?:string,
    public createdAt?:Date,
    public updatedAt?:Date,
    public id?:string,
    public editar?:boolean
  ){}
}
