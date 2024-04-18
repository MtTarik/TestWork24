'use client';
import {Button, Grid, Stack, TextField,} from '@mui/material'
import BaseCard from '@/app/(muLayout)/components/shared/BaseCard';

const Forms = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="Форма">
                    <>
                        <Stack spacing={3}>
                            <TextField
                                id="name-basic"
                                label="Імя"
                                variant="outlined"
                            />
                            <TextField id="email-basic" label="Email" variant="outlined"/>
                            <TextField
                                id="pass-basic"
                                label="Пароль"
                                type="password"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Текст"
                                multiline
                                rows={4}
                            />
                            {/*Таке тестував дещо */}

                            {/*<TextField*/}
                            {/*  error*/}
                            {/*  id="er-basic"*/}
                            {/*  label="Помилка"*/}
                            {/*  variant="outlined"*/}
                            {/*/>*/}
                            {/*<FormGroup>*/}
                            {/*  <FormControlLabel*/}
                            {/*    control={<Checkbox defaultChecked />}*/}
                            {/*    label="TEST"*/}
                            {/*  />*/}
                            {/*  <FormControlLabel*/}
                            {/*    disabled*/}
                            {/*    control={<Checkbox />}*/}
                            {/*    label="TEST"*/}
                            {/*  />*/}
                            {/*</FormGroup>*/}
                            {/*<FormControl>*/}
                            {/*  <FormLabel id="demo-radio-buttons-group-label">TEST</FormLabel>*/}
                            {/*  <RadioGroup*/}
                            {/*    aria-labelledby="demo-radio-buttons-group-label"*/}
                            {/*    defaultValue="female"*/}
                            {/*    name="radio-buttons-group"*/}
                            {/*  >*/}
                            {/*    <FormControlLabel*/}
                            {/*      value="female"*/}
                            {/*      control={<Radio />}*/}
                            {/*      label="TEST"*/}
                            {/*    />*/}
                            {/*    <FormControlLabel*/}
                            {/*      value="male"*/}
                            {/*      control={<Radio />}*/}
                            {/*      label="TEST"*/}
                            {/*    />*/}
                            {/*    <FormControlLabel*/}
                            {/*      value="other"*/}
                            {/*      control={<Radio />}*/}
                            {/*      label="TEST"*/}
                            {/*    />*/}
                            {/*  </RadioGroup>*/}
                            {/*</FormControl>*/}
                        </Stack>
                        <br/>
                        <Button>
                            Кнопка...
                        </Button>
                    </>
                </BaseCard>
            </Grid>

        </Grid>
    );
};

export default Forms;
