let bodyobj = {
    eletype: "div",
    eleclsname: "container",
    container1: {
      eletype: "div",
      eleclsname: "container1",
      image: {
        src: "./profileImage.jpg",
        eletype: "img",
        eleclsname: "image"
      },
      text: {
        eletype: "div",
        eleclsname: "textdiv",
        name: {
          eletype: "div",
          eleclsname: "name",
          textcontent: "Ruben Tillman"
        },
        label: {
          eletype: "label",
          eleclsname: "description",
          textcontent: "Etiam sit amet orci eget"
        },
      },
      button: {
        eletype: "button",
        eleclsname: "button",
        textcontent: "View Profile"
      },
    },
    container2: {
      eletype: "div",
      eleclsname: "container2",
      content: {
        eletype: "div",
        eleclsname: "content",
        number: {
          eletype: "label",
          eleclsname: "number",
          textcontent: "12"
        },
        para: {
          eletype: "label",
          eleclsname: "para",
          textcontent: "new leads,"
        },
        amount: {
          eletype: "label",
          eleclsname: "amount",
          textcontent: "$56.24"
        },
        parag: {
          eletype: "label",
          eleclsname: "parag",
          textcontent: "in sales"
        },
      },
    },
    container3: {
      eletype: "div",
      eleclsname: "container3",
      topleft: {
        eletype: "div",
        eleclsname: "topleft",
        automation: {
          eletype: "button",
          eleclsname: "automation",
          textcontent: "Automation"
        },
      },
      topright: {
        eletype: "div",
        eleclsname: "topright",
        report: {
          eletype: "button",
          eleclsname: "report",
          textcontent: "Report"
        },
      },
      botleft: {
        eletype: "div",
        eleclsname: "botleft",
        activity: {
          eletype: "button",
          eleclsname: "activity",
          textcontent: "Activity"
        },
      },
      botright: {
        eletype: "div",
        eleclsname: "botright",
        settings: {
          eletype: "button",
          eleclsname: "settings",
          textcontent: "Settings"
        },
      },
    },
  };
  
  
function createElements(parent, obj) {
    const element = document.createElement(obj.eletype);
    element.className = obj.eleclsname;
  
    if (obj.textcontent) {
      element.textContent = obj.textcontent;
    }
  
    if (obj.src) {
      const image = document.createElement("img");
      image.src = obj.src;
      element.appendChild(image);
    }
  
    parent.appendChild(element);
  
    for (const key in obj) {
      if (typeof obj[key] === "object" && key !== "eletype" && key !== "eleclsname") {
        createElements(element, obj[key]);
      }
    }
  }
  
  const rootContainer = document.createElement(bodyobj.eletype);
  rootContainer.className = bodyobj.eleclsname;
  
  createElements(rootContainer, bodyobj);
  
  document.body.appendChild(rootContainer);
  

