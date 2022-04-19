const findAvailablePet = document.getElementById('find-availabel-pet');
const findPendingPet = document.getElementById('find-pending-pet');
const findSoldPet = document.getElementById('find-sold-pet');
const findPetById = document.getElementById('find-pet-by-id');
const findStoreInventory = document.getElementById('find-store-inventory');
const findUserOne = document.getElementById('find-user1');
const findOrderByPetId = document.getElementById('find-order-by-pet-id');
const loginUser = document.getElementById('login-user');
const logout = document.getElementById('logout');

const placeOrderForAPet = document.getElementById('place-order-for-a-pet');
const postPet = document.getElementById('post-pet');
const updatePet = document.getElementById('update-pet');
const createWithUserList = document.getElementById('create-with-user-list');
const createWithUserArray = document.getElementById('create-with-user-array');
const createUser = document.getElementById('create-user');
const updateAnExistingPet = document.getElementById('update-an-existing-pet');
const updateUser = document.getElementById('update-user');
const deleteUser = document.getElementById('delete-user');
const deleteOrder = document.getElementById('delete-order');
const deletePet = document.getElementById('delete-pet');

const myForm = document.getElementById("myForm");
const inpFile = document.getElementById("inpFile");


const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json' } : {}
    }).then(response => {
        if (response.status >= 400) {
            // !response.ok
            return response.json().then(errResData => {
                const error = new Error('Something went wrong!');
                error.data = errResData;
                throw error;
            });
        }
        return response.json();
    });
};

const findAvailablePetData = () => {
    sendHttpRequest('GET',  'https://petstore.swagger.io/v2/pet/findByStatus?status=available').then(responseData => {
        console.log(responseData);
    });
};

const findPendingPetData = () => {
    sendHttpRequest('GET',  'https://petstore.swagger.io/v2/pet/findByStatus?status=pending').then(responseData => {
        console.log(responseData);
    });
};

const findSoldPetData = () => {
    sendHttpRequest('GET',  'https://petstore.swagger.io/v2/pet/findByStatus?status=sold').then(responseData => {
        console.log(responseData);
    });
};

const findPetByIdData = () => {
    const petId = document.getElementById('petId').value;
    const urlWithPetId = "https://petstore.swagger.io/v2/pet/" + petId;
    sendHttpRequest('GET',  urlWithPetId).then(responseData => {
        console.log(responseData);
    });
};

const findStoreInventoryData = () => {
    sendHttpRequest('GET',  'https://petstore.swagger.io/v2/store/inventory').then(responseData => {
        console.log(responseData);
    });
};

const findOrderByPetIdData = () => {
    const petIdForOder = document.getElementById('petIdForOrder').value;
    const urlWithPetIdForOrder = "https://petstore.swagger.io/v2/store/order/" + petIdForOder;
    sendHttpRequest('GET',  urlWithPetIdForOrder).then(responseData => {
        console.log(responseData);
    });
};

const findUserOneData = () => {
    sendHttpRequest('GET',  'https://petstore.swagger.io/v2/user/user1').then(responseData => {
        console.log(responseData);
    });
};

const loginUserData = () => {
    sendHttpRequest('GET',  'https://petstore.swagger.io/v2/user/login?username=username&password=password').then(responseData => {
        console.log(responseData);
    });
};

const logoutData = () => {
    sendHttpRequest('GET',  'https://petstore.swagger.io/v2/user/logout').then(responseData => {
        console.log(responseData);
    });
};

const dog = {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2021-06-05T15:24:55.503Z",
    status: "placed",
    complete: true
};

const placeOrderForAPetData = () => {
    sendHttpRequest('POST', 'https://petstore.swagger.io/v2/store/order', dog)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err, err.data);
        });
};


const pet = {
    id: 0,
    category: {
        id: 0,
        name: "string"
    },
    name: "dogie",
    photoUrls: [
        "string"
    ],
    tags: [
        {
            id: 0,
            name: "string"
        }
    ],
    status: "available"
}

const postPetData = () => {
    sendHttpRequest('POST', 'https://petstore.swagger.io/v2/pet', pet)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err, err.data);
        });
};

const petToUpdate = {
    id: 9223127596080596316,
    name: "NewName",
    status: "sold"

}

const updatePetData = () => {
    sendHttpRequest('POST', 'https://petstore.swagger.io/v2/pet/9223127596080596316', petToUpdate)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err, err.data);
        });
};

const userList = [
    {
        id: 0,
        username: "string",
        firstName: "string",
        lastName: "string",
        email: "string",
        password: "string",
        phone: "string",
        userStatus: 0
    }
];

const createWithUserListData = () => {
    sendHttpRequest('POST', 'https://petstore.swagger.io/v2/user/createWithList', userList)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err, err.data);
        });
};

const userArray = [
    {
        id: 0,
        username: "string",
        firstName: "string",
        lastName: "string",
        email: "string",
        password: "string",
        phone: "string",
        userStatus: 0
    }
];

const createWithUserArrayData = () => {
    sendHttpRequest('POST', 'https://petstore.swagger.io/v2/user/createWithArray', userArray)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err, err.data);
        });
};

const user =
    {
        id: 0,
        username: "string",
        firstName: "string",
        lastName: "string",
        email: "string",
        password: "string",
        phone: "string",
        userStatus: 0
    };

const createUserData = () => {
    sendHttpRequest('POST', 'https://petstore.swagger.io/v2/user', user)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err, err.data);
        });
};

const existingPetToUpdate =
    {
        id: 0,
        category: {
            id: 0,
            name: "string"
        },
        name: "doggie",
        photoUrls: [
            "string"
        ],
        tags: [
            {
                id: 0,
                name: "string"
            }
        ],
        status: "available"
    };

const updateAnExistingPetData = () => {
    sendHttpRequest('PUT', 'https://petstore.swagger.io/v2/pet', existingPetToUpdate)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err, err.data);
        });
};

const userToUpdate =
    {
        id: 0,
        username: "string",
        firstName: "string",
        lastName: "string",
        email: "string",
        password: "string",
        phone: "string",
        userStatus: 0
    };

const updateUserData = () => {
    sendHttpRequest('PUT', 'https://petstore.swagger.io/v2/user/user1', userToUpdate)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err, err.data);
        });
};

const deleteUserData = () => {
    sendHttpRequest('DELETE', 'https://petstore.swagger.io/v2/user/user1')
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err, err.data);
        });
};

const deleteOrderData = () => {
    const orderIdForDelete = document.getElementById('orderIdForDelete').value;
    const urlDeleteOrder = "https://petstore.swagger.io/v2/store/order/" + orderIdForDelete;
    sendHttpRequest('DELETE', urlDeleteOrder)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err, err.data);
        });
};

const deletePetData = () => {
    const petIdForDelete = document.getElementById('petIdForDelete').value;
    const urlDeletePet = "https://petstore.swagger.io/v2/pet/" + petIdForDelete;
    sendHttpRequest('DELETE', urlDeletePet)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err, err.data);
        });
};



document.addEventListener('DOMContentLoaded', init);

function init() {
    document.getElementById('btnSubmit').addEventListener('click', upload);
}

function upload(ev) {
    ev.preventDefault();
    const petIdForImage = document.getElementById('petIdForImage').value;
    const url = "https://petstore.swagger.io/v2/pet/" + petIdForImage + "/uploadImage";

    let h = new Headers();
    h.append('Accept', 'application/json');
    let fd = new FormData();

    let myFile = document.getElementById('avatar_img').files[0];
    fd.append('file', myFile, "avatar.png");
    let req = new Request(url, {
        method: 'POST',
        headers: h,
        mode: 'no-cors',
        body: fd
    });
    fetch(req)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log('ERROR:', err.message);
        });
}


findAvailablePet.addEventListener('click', findAvailablePetData);
findPendingPet.addEventListener('click', findPendingPetData);
findSoldPet.addEventListener('click', findSoldPetData);
findPetById.addEventListener('click', findPetByIdData);
findStoreInventory.addEventListener('click', findStoreInventoryData);
findOrderByPetId.addEventListener('click', findOrderByPetIdData)
findUserOne.addEventListener('click', findUserOneData);
placeOrderForAPet.addEventListener('click', placeOrderForAPetData);
loginUser.addEventListener('click', loginUserData);
logout.addEventListener('click', logoutData);
postPet.addEventListener('click', postPetData);
updatePet.addEventListener('click', updatePetData);
createWithUserList.addEventListener('click', createWithUserListData);
createWithUserArray.addEventListener('click', createWithUserArrayData);
createUser.addEventListener('click', createUserData);
updateAnExistingPet.addEventListener('click', updateAnExistingPetData);
updateUser.addEventListener('click', updateUserData);
deleteUser.addEventListener('click', deleteUserData);
deleteOrder.addEventListener('click', deleteOrderData);
deletePet.addEventListener('click', deletePetData);