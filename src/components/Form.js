import React, { Component } from 'react'
import { Card,CardText,CardTitle,CardActions, Textfield,ListItem,Button } from 'react-mdl';

export class Form extends Component {
  render() {
    return (
      <div className="list-form" >
          <Card shadow={10} style={{width: '700px', height: '990px',pandding:"10",marginTop:'450px',marginBottom:'90px'}}>
            <CardTitle  expand style={{textDecoration: 'double', padding:"0px",marginLeft:"0px",textDecorationStyle:"italic",flexGrow:'0',marginLeft:'15px',marginTop:"50px",marginBottom:"35px"}}>
               <h1 className="h-form">Demande changement groupe</h1>
            </CardTitle>
            <CardText expand  style={{padding:"0px",margin:"150px",marginTop: "-15px",width:'700px'}}>
                   <list  >
            
                    <ListItem> 
                      <Textfield
                      onChange={() => {}}
                        label="UserName..."
                        floatingLabel
                        style={{width: '300px'}}/>
                    </ListItem>
                    <ListItem>
                      <Textfield
                        onChange={() => {}}
                        label="Matricule..."
                        floatingLabel
                        style={{width: '300px'}}/>
                    </ListItem>
                    <ListItem>
                    <label>
                      Promo   :
                      <select>
                        <option >L1</option>
                        <option value="lime">L2</option>
                        <option selected value="coconut">L3</option>
                        <option value="mango">M1</option>
                        <option value="mango">M2</option>
                      </select>
                    </label>
                    </ListItem>
                    <ListItem>
                      <Textfield
                        onChange={() => {}}
                        label="Groupe Actuel..."
                        floatingLabel
                        style={{width: '300px'}}/>
                    </ListItem>
                    <ListItem>
                      <Textfield
                        onChange={() => {}}
                        label="Groupe voulu..."
                        floatingLabel
                        style={{width: '300px'}}/>
                    </ListItem>
                    <ListItem>
                        <Textfield
                        onChange={() => {}}
                        label="Pourquoi vous voulez changer de groupe?..."
                        rows={3}
                        style={{width: '350px'}} />
                    </ListItem>
                    <ListItem>
                       <Button ClassName ="btn-form" position ="center" raised accent ripple>Envoyer</Button>

                   </ListItem>
                   </list>
             </CardText>
            
          </Card>
       
      </div>
    )
  }
}

export default Form;