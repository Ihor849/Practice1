const fs = require("fs/promises");
const path = require("path");

// console.log(__dirname);
// console.log(path.join());
// console.log(path.resolve());

const usersPath = path.join(__dirname, "..", "db", "users.json");
// console.log(usersPath);

class FileOperations {
  constructor(path) {
    this.path = path;
  }

  read = async () => {
    return await fs.readFile(this.path, "utf-8");
  };

  display = async () => {
    const data = await this.read();
    console.log(data);
  };

  create = async (users) => {
    return await fs.writeFile(this.path, JSON.stringify(users, null, 2));
  };

  update = async (user) => {
    const data = JSON.parse(await this.read());
    data.push(user);
    console.log(typeof data);
    return await this.create(data);
  };

  updateOne = async (user) => {
    const data = JSON.parse(await this.read());
    const updated = data.map((item) => {
      
      if (Number(item.id) === user.id) {
        item.name = user.name;
      }
      return item
    });
  //  console.log(updated);
    return await this.create(updated);
  };

  remove = async () => {
    return await fs.unlink(this.path);
  };

  removeOne = async (user) => {
    const data = JSON.parse(await this.read());
    const remoweUser = data.filter(item => {
    return item.id !== user.id;
    }) 

    return await this.create(remoweUser);
  };

}

const file = new FileOperations(usersPath);

// file.display();

// const users = [
//   {"id": 1,"name": "Dima"},
//   {"id": 2,"name": "Luda"},
//   {"id": 3,"name": "Max"}
// ]

// file.create(users);

// file.update({
//   id: 4,
//   name: "Andriy",
// });

// file.remove();

// file.removeOne({ id: 3, name: "Max Bondarew" });

// file.updateOne({ id: 3, name: "Max Bondarew" });

const asyncHandler = async (operetion, data) => {
  try {
    if (data) {
      await operetion(data);
    } else {
      await operetion();
    }
  } catch (error) {
    console.log(error.message);
  }
};

// asyncHandler(file.display.bind(file));
// asyncHandler(file.display);
// asyncHandler(file.update, {id: 5,name: "Masha"});

// asyncHandler(file.updateOne, {id: 2,name: "Luda Chumak"});
