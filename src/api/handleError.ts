export default function handleError(error: any) {
  console.error(error); //eslint-disable-line

  throw error.response;
}
