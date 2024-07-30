type LoggerType = 'error' | 'info' | 'success';

const colorizeLog = (type: LoggerType, message: string) => {
  const error = '\x1b[31m';
  const reset = '\x1b[0m';
  const success = '\x1b[32m';
  const info = '\x1b[34m';

  switch (type) {
  case 'error':
    return `${error}${message}${reset}`;
  case 'success':
    return `${success}${message}${reset}`;
  case 'info':
    return `${info}${message}${reset}`;
  default:
    return message;
  }
};

export const logger = (type: LoggerType, message: string) => {
  const coloredMessage = colorizeLog(type, message);
  console.log(coloredMessage);
};
