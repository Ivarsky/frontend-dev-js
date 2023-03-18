export const createAd = async (newAdData)=>{

    const newAdvert ={
        name: newAdData[0],
        image: newAdData[1],
        price: newAdData[2],
        description: newAdData[3],
        sell: newAdData[4]
    }
    const token = localStorage.getItem('token')

    const response = await fetch('http://localhost:8000/api/advertisements',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({newAdvert})
    })

    if (!response.ok) { 
        throw new Error('Error while creating add')
    }
}