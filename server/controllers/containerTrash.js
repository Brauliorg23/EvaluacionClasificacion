const ContainerTrash = require("../models/containerTrash");


function addContainerTrash(req, res){
    const containerTrash = new ContainerTrash();
    const {code, title, description} = req.body;
    containerTrash.code = code;
    containerTrash.title = title;
    containerTrash.description = description;
    containerTrash.active = true;

    if (!code || !title || !description) {
        res.status(500).send({message: "Los campos son obligatorios"});
    }else{    
        containerTrash.save((err, createdContainerTrash) => {
            if (err) {
              console.log(err);
                res.status(500).send({message: "Ubicasion ya existe"});
            }else{
               if(!createdContainerTrash){
                   res.status(500).send({message: "Error al crear la ubicacion"});
               }else{
                   res.status(200).send({message: "Contenedor creado con exito"});
               }
            }
        })
    }
}

function getContainerTrash(req, res){
    ContainerTrash.find().then(containerTrash => {
        if(!containerTrash){
            res.status(404).send({message: "No se ha encontrado ninguna containerTrash. "});
        }else{
            res.status(200).send({containerTrash});
        }
    });
}

function getContainersActive(req, res){
  const query = req.query;

  ContainerTrash.find({active: query.active}).then(containerTrash => {
      if(!containerTrash){
          res.status(404).send({message: "No se ha encontrado ningun ususario. "});
      }else{
          res.status(200).send({containerTrash});
      }
  });
}

function updateContainerTrash(req, res) {
    let containerTrashData = req.body;
    const params = req.params;
  
    ContainerTrash.findByIdAndUpdate({_id: params.id}, containerTrashData, (err, containerTrashUpdate) => {
      if (err) {
        res.status(500).send({ message: "Error del servidor." });
      } else {
        if (!containerTrashUpdate) {
          res.status(404).send({ message: "No se ha encontrado ningun ContainerTrash." });
        } else {
          res.status(200).send({ message: "ContainerTrash actualizado correctamente." });
        }
      }
    });
  }

function activateContainerTrash(req, res) {
    const { id } = req.params;
    const { active } = req.body;
  
    ContainerTrash.findByIdAndUpdate(id, { active }, (err, containerTrashStored) => {
      if (err) {
        res.status(500).send({ message: "Erro del servidor." });
      } else {
        if (!containerTrashStored) {
          res.status(404).send({ message: "no se ha encontrad el ContainerTrash." });
        } else {
          if (active === true) {
            res.status(200).send({ message: "ContainerTrash activado correctamente." });
          } else {
            res.status(200).send({ message: "ContainerTrash desactivado correctamente." });
          }
        }
      }
    });
  }

function deleteContainerTrash(req, res) {
    const { id } = req.params;
  
    ContainerTrash.findByIdAndRemove(id, (err, ContainerTrashDeleted) => {
      if (err) {
        res.status(500).send({ message: "Error del servidor." });
      } else {
        if (!ContainerTrashDeleted) {
          res.status(404).send({ message: "ContainerTrash no encontrado." });
        } else {
          res
            .status(200)
            .send({ message: "El ContainerTrash ha sido eliminado correctamente." });
        }
      }
    });
  }

module.exports = {
    addContainerTrash,
    getContainerTrash,
    getContainersActive,
    updateContainerTrash,
    activateContainerTrash,    
    deleteContainerTrash
}