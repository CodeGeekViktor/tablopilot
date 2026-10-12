type AuthLikeError = {
  code?: string;
  message?: string;
};

const codeMessages: Record<string, string> = {
  invalid_credentials: "Неверный email или пароль.",
  email_not_confirmed:
    "Подтвердите адрес электронной почты. Мы отправили письмо со ссылкой.",
  user_already_exists:
    "Аккаунт с таким email уже зарегистрирован. Войдите в систему.",
  email_exists:
    "Аккаунт с таким email уже зарегистрирован. Войдите в систему.",
  weak_password: "Пароль слишком простой. Используйте не менее 6 символов.",
  over_email_send_rate_limit:
    "Слишком много попыток. Подождите несколько минут и попробуйте снова.",
  over_request_rate_limit:
    "Слишком много попыток. Подождите несколько минут и попробуйте снова.",
  signup_disabled: "Регистрация временно недоступна.",
  same_password: "Новый пароль должен отличаться от текущего.",
  validation_failed: "Проверьте правильность введённых данных.",
};

export function getAuthErrorMessage(error: AuthLikeError | null | undefined) {
  if (!error) {
    return "Не удалось выполнить запрос. Попробуйте ещё раз.";
  }

  if (error.code && codeMessages[error.code]) {
    return codeMessages[error.code];
  }

  const message = error.message?.toLowerCase() ?? "";

  if (message.includes("already registered")) {
    return codeMessages.user_already_exists;
  }

  if (message.includes("email not confirmed")) {
    return codeMessages.email_not_confirmed;
  }

  if (message.includes("invalid login credentials")) {
    return codeMessages.invalid_credentials;
  }

  if (message.includes("password")) {
    return codeMessages.weak_password;
  }

  return "Не удалось выполнить запрос. Попробуйте ещё раз.";
}

export const authPageMessages = {
  confirmFailed:
    "Не удалось подтвердить email. Запросите письмо ещё раз или войдите, если аккаунт уже подтверждён.",
  confirmSuccess: "Email подтверждён. Теперь можно войти в аккаунт.",
  signupSuccess:
    "Проверьте почту и перейдите по ссылке, чтобы подтвердить аккаунт.",
};
