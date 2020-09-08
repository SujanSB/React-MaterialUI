import React from 'react'
import Carddgn  from './Carddgn'
import { Grid } from '@material-ui/core'

function Carddata() {
    const datas=[{
    id:1,
    topic:"Sujan",
    body:"He is one of the most deedicated person that i have ever seen",
    url:"https://scontent.fktm6-1.fna.fbcdn.net/v/t1.0-9/91493854_2534793213432111_4749368797192781824_o.jpg?_nc_cat=103&_nc_sid=a4a2d7&_nc_ohc=ZyaotQtpVXYAX93OFoU&_nc_ht=scontent.fktm6-1.fna&oh=210b13cc12ce69f8d839a81db6fc50d6&oe=5F7862C7"
    
    },
    {
    id:2,
    topic:"Santosh",
    body:"He is one of the most passionate person that i have ever meet"
        

    },
    {
        id:3,
        topic:"Shashank",
        body:"He is one of the most Handsome person that i have ever meet",
        
    
        }
        ,  {
            id:4,
            topic:"Kapil",
            body:"He is one of the most Chill person that i have ever meet"
                
        
            },  {
                id:5,
                topic:"Shiva",
                body:"He is one of the Topper person that i have ever meet"
                    
            
                },  {
                    id:6,
                    topic:"Prajwal",
                    body:"He is one of the most Talented person that i have ever meet"
                        
                
                    }
    ]

   return (
		< Grid container spacing={2} >
			{datas.map((data)=>
            <Grid item xs={12} sm={4}>
            <Carddgn data={data} key={data.id}/>
            </Grid>
				)
			}

		</ Grid>
		
	)
}

export default Carddata
