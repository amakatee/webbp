import React from 'react'
import Contacts from './Contacts'
import {Grid, TextField , Button} from '@mui/material'
const Form = () => {
  return (
     
    <div className='form-section-inner'>
        <div className='contacts'>
         <Contacts />
         </div> 
 
    <div className='form'>
        <form>
            <Grid container direction="column" alignItens="center" spacing={3}> 
               <Grid item>
                   <TextField
                   name="Name"
                   variant="standard"
                   color='secondary'
                   label='Имя'
                   sx={{width:"18rem"}}
                  >

                   </TextField>

                </Grid>

                <Grid item>
                   <TextField
                   name="Email"
                   variant="standard"
                   color='secondary'
                   label='Email'
                   sx={{width:"18rem"}}
                  >

                   </TextField>

                </Grid>
                <Grid item>
                   <TextField
                   name="Mesage"
                   variant="outlined"
                   color='secondary'
                   label='Сообщение'
                   sx={{width:"18rem"}}
                   multiline
                   rows={5}
                  >

                   </TextField>

                </Grid>
               
            </Grid>
            <br />
            <Button color='secondary' sx={{width:"18rem"}} variant='contained'> Отправить Сообщение</Button>
        </form>
    </div>
    </div>
  )
}

export default Form