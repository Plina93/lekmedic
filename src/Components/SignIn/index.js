import React from 'react'
import {Container, FormWrap, Logo, FormContent, Form, FormInput, FormH1, FormLabel, FormButton} from './SignInElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Logo to='/'>Lekmedic</Logo>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Zaloguj się do konta Pacjenta</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput htmlFor='email' required/>
                            <FormLabel htmlFor='for'>Hasło</FormLabel>
                            <FormInput htmlFor='password' required/>
                            <FormButton type='submit'>Zatwierdź</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn