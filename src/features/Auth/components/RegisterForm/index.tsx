import { yupResolver } from "@hookform/resolvers/yup";
import {
  AccountCircle,
  LockOutlined,
  PasswordOutlined,
} from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  Avatar,
  Button,
  Grid,
  InputAdornment,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FCTextField } from "../../../../component/FCInputField";
import { showErrForm } from "../../../../utils/custom-style";
import "./style.scss";

interface PropRegisterForm {
  onSubmit: any;
}
const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập thông tin"),
  email: yup
    .string()
    .required("Vui lòng nhập thông tin")
    .email("Email không đúng định dạng"),
  password: yup
    .string()
    .required("Vui lòng nhập thông tin")
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự!"),
    retypePassword:yup.string().required("Vui lòng nhập thông tin").oneOf([yup.ref('password')] , 'Mật khẩu không khớp !')
});
const useStyles = makeStyles({
  itemTextField: {
    marginBottom: "15px",
    background: "#fbfbfb",
    border: "1px solid #f1f3f5",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    width: "100%",
    position: "relative",
  },
  header: {
    textAlign: "center",
    marginBottom: "15px",
  },
  avatar: {
    margin: "auto",
  },
});
export const RegisterForm = (props: PropRegisterForm) => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleSubmitForm = (values: any) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
  };
  return (
    <div>
      <div className={classes.header}>
        <Avatar className={classes.avatar}>
          <LockOutlined></LockOutlined>
        </Avatar>
        <Typography component="h3" variant="h5">
          Đăng ký tài khoản
        </Typography>
      </div>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Grid container spacing={1} className="panel-register-form">
          <Grid item md={6}>
            <div className={classes.itemTextField}>
              <FCTextField
                variant="filled"
                name="name"
                register={register}
                placeholder="Họ và tên"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
              <div>{errors.name && showErrForm(errors.name.message)}</div>
            </div>

            <div className={classes.itemTextField}>
              <FCTextField
                name="email"
                variant="filled"
                register={register}
                placeholder="Email"
                startAdornment={
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                }
              />
              <div>{errors.email && showErrForm(errors.email.message)}</div>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.itemTextField}>
              <FCTextField
                name="password"
                register={register}
                variant="filled"
                type="password"
                startAdornment={
                  <InputAdornment position="start">
                    <PasswordOutlined />
                  </InputAdornment>
                }
                placeholder="Mật khẩu"
              />
              <div>
                {errors.password && showErrForm(errors.password.message)}
              </div>
            </div>
            <div className={classes.itemTextField}>
              <FCTextField
                name="retypePassword"
                register={register}
                variant="filled"
                type="password"
                startAdornment={
                  <InputAdornment position="start">
                    <PasswordOutlined />
                  </InputAdornment>
                }
                placeholder="Nhập lại mật khẩu"
              />
                 <div>
                {errors.retypePassword && showErrForm(errors.retypePassword.message)}
                </div>
            </div>
          </Grid>
        </Grid>
        <div className="button-submit">
          <Button type="submit" variant="contained" color="primary">
            Đăng ký
          </Button>
        </div>
      </form>
    </div>
  );
};
