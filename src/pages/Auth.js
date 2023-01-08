import {useLoginContext} from "../contexts/LoginProvider";
import {Box} from "@mui/material";
import TypographyRound2 from "../components/TypographyRound2";
import FormRound2 from "../components/FormRound2";
import TextFieldRound2 from "../components/TextFieldRound2";
import ButtonRound2 from "../components/ButtonRound2";
import LinkRound2 from "../components/LinkRound2";
import {ROUTE_REGISTER} from "../constants/routes";

export default function Login(){
    const {stLogin,setStLogin,submitLogin,}=useLoginContext()
    return <Box>
        <TypographyRound2 variant={'h1'}>
            Welcome to Big Star //you can using lib i18  to support multi language here
        </TypographyRound2>
        <FormRound2 handleSubmit={()=>submitLogin}>
            <TextFieldRound2  label="userName" variant="outlined" placeholder={'Username or Email'}
                validates={[
                    {
                        regex: 'isEmpty(stLogin.userName)',
                        showError: 'Không được để trống'
                    },
                    /// you can add more validate here
                ]}
            />
            <TextFieldRound2  label="password" variant="outlined" placeholder={'Password'}
                              validates={[
                                  {
                                      regex: 'isEmpty(stLogin.password)',
                                      showError: 'Không được để trống'
                                  },
                                  /// you can add more validate here
                              ]}
            />
            <TypographyRound2 variant={'p'}>
                Forgot Password
            </TypographyRound2>
            <ButtonRound2 type={'submit'} classNames={'btn-primary'}>
                Submit
            </ButtonRound2>
        </FormRound2>
        <LinkRound2 to={ROUTE_REGISTER}>
            <TypographyRound2 variant={'p'}>Click here to register an account</TypographyRound2>
        </LinkRound2>
    </Box>
}