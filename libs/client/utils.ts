export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export function getIdFromEmail(email: string) {
  if (email !== undefined && email.length > 0) {
    return email.substring(0, email.indexOf("@"));
  } else {
    return email;
  }
}
