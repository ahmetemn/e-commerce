import * as yup from "yup";

const validations = yup.object().shape({
    username: yup.string().required('Zorunlu alan'),
    email: yup.string().email('Geçerli bir email girin.').required('Zorunlu alan'),
    password:yup.string().min(8 , 'Parolanız en az 8 karakter olmalı.').required('Zorunlu alan'),
    passwordAgain:yup.string().oneOf([yup.ref('password') ],"Parolalar uyuşmuyor." ).required('Zorunlu alan')
  });

  export default validations;