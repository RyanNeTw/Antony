const SanitizeString = (str: string) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/["']/g, '')
    .replace(/[\n\r\t]/g, ' ')
    .replace(/[^a-zA-Z0-9 .,?!_-]/g, '')
}

export default SanitizeString
