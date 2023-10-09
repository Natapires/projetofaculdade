import {
    Entity,
    PrimaryColumn,
    Column
  } from "typeorm";
import { v4 as uuid } from "uuid";
  
  @Entity("Filme")
  class Filme {
    @PrimaryColumn()
    readonly id!: string ;
    
    @Column()
      name!: string;
  
    @Column()
      description!: string;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { Filme };