let bodyobj = {

    container:{
        eletype : "div",
        eleclsname : "container",
        container1:{
            eletype : "div",
            eleclsname : "container1",
            image:{
                src:"profileimage.jpg",
                eletype : "img",
                eleclsname : "image"
            },
            text:{
                eletype : "div",
                eleclsname : "textdiv",
                name:{ 
                    eletype : "div",
                    eleclsname : "name",
                    textcontent1 : "Ruben Tillman"
                },
                label:{
                    eletype : "label",
                    eleclsname : "description",
                    textcontent2 : "Etiam sit amet orci eget"
                }
            },
            button:{
                eletype : "button",
                eleclsname : "button",
                textcontent3 : "View Profile"
            }

        },
   
        container2:{
            eletype : "div",
            eleclsname : "container2",
            number:{
                eletype : "label",
                eleclsname : "number",
                textcontent4 : "12"
            },
            para:{
                eletype : "label",
                eleclsname : "para",
                textcontent5 : "new leads,"
            },
            amount:{
                eletype : "label",
                eleclsname : "amount",
                textcontent6 : "$56.24"
            },
            parag:{
                eletype : "label",
                eleclsname : "parag",
                textcontent7 : "in sales"
            }
        },
        container3:{
            eletype:"div",
            eleclsname:"container3",
            topleft:{
                eletype:"div",
                eleclsname:"topleft",
                automation:{
                    eletype:"button",
                    eleclsname:"automation",
                    textcontent8:"Automation"
                }

            },
            topright:{
                eletype:"div",
                eleclsname:"topright",
                textcontent9:"report"
            },
            botleft:{
                eletype:"div",
                eleclsname:"botleft",
                textcontent10:"Activity"
            },
            botright:{
                eletype:"div",
                eleclsname:"botright",
                textcontent11:"Settings"
            }

        }
    }
}
    
const container = document.createElement(bodyobj.container.eletype);
container.className = bodyobj.container.eleclsname;

const container1 = document.createElement(bodyobj.container.container1.eletype);
container1.className = bodyobj.container.container1.eleclsname;

const image = document.createElement(bodyobj.container.container1.image.eletype);
image.className = bodyobj.container.container1.image.eleclsname;
image.src = bodyobj.container.container1.image.src;
container1.appendChild(image);

const text = document.createElement(bodyobj.container.container1.text.eletype);
text.className = bodyobj.container.container1.text.eleclsname;

const name1 = document.createElement(bodyobj.container.container1.text.name.eletype);
name1.className = bodyobj.container.container1.text.name.eleclsname;
name1.textContent = bodyobj.container.container1.text.name.textcontent1;
text.appendChild(name1);


const label = document.createElement(bodyobj.container.container1.text.label.eletype);
label.classNname = bodyobj.container.container1.text.label.eleclsname;
label.textContent = bodyobj.container.container1.text.label.textcontent2;
text.appendChild(label);

container1.appendChild(text);

const button = document.createElement(bodyobj.container.container1.button.eletype)
button.className = bodyobj.container.container1.button.eletype;
button.textContent = bodyobj.container.container1.button.textcontent3;
container1.appendChild(button);

container.appendChild(container1);

const container2 = document.createElement(bodyobj.container.container2.eletype);
container2.className = bodyobj.container.container2.eleclsname;

const number = document.createElement(bodyobj.container.container2.number.eletype);
number.className = bodyobj.container.container2.number.eleclsname;
number.textContent = bodyobj.container.container2.number.textcontent4;
container2.appendChild(number);
 
const para = document.createElement(bodyobj.container.container2.para.eletype);
para.className = bodyobj.container.container2.para.eleclsname;
para.textContent = bodyobj.container.container2.para.textcontent5;
container2.appendChild(para);

const amount = document.createElement(bodyobj.container.container2.amount.eletype);
amount.className = bodyobj.container.container2.amount.eleclsname;
amount.textContent = bodyobj.container.container2.amount.textcontent6;
container2.appendChild(amount);
 
const parag = document.createElement(bodyobj.container.container2.parag.eletype);
parag.className = bodyobj.container.container2.parag.eleclsname;
parag.textContent = bodyobj.container.container2.parag.textcontent7;
container2.appendChild(parag);


container.appendChild(container2);

const container3 = document.createElement(bodyobj.container.container3.eletype);
container3.className = bodyobj.container.container3.eleclsname;

const topleft = document.createElement(bodyobj.container.container3.topleft.eletype);
topleft.className = bodyobj.container.container3.topleft.eleclsname;

const automation = document.createElement(bodyobj.container.container3.topleft.automation.eletype);
automation.className = bodyobj.container.container3.topleft.automation.eleclsname;
automation.textContent = bodyobj.container.container3.topleft.automation.textcontent8;
topleft.appendChild(automation);

container3.appendChild(topleft);

const topright = document.createElement(bodyobj.container.container3.topright.eletype);
topright.className = bodyobj.container.container3.topright.eleclsname;
topright.textContent = bodyobj.container.container3.topright.textcontent9;
container3.appendChild(topright);

const botleft = document.createElement(bodyobj.container.container3.botleft.eletype);
botleft.className = bodyobj.container.container3.botleft.eleclsname;
botleft.textContent = bodyobj.container.container3.botleft.textcontent10;
container3.appendChild(botleft);

const botright = document.createElement(bodyobj.container.container3.botright.eletype);
botright.className = bodyobj.container.container3.botright.eleclsname;
botright.textContent = bodyobj.container.container3.botright.textcontent11;
container3.appendChild(botright);

container.appendChild(container3);



document.body.append(container);


