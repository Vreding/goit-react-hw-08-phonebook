import { ErrorMessage, Wrapper } from "./Error.styled";


export default function Error() {
  return (
    <Wrapper>
      <ErrorMessage>
        <span>Error 404: </span>
        Page Not Found
      </ErrorMessage>
      <img
        src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
        alt="Error 404"
      >       
      </img>
    </Wrapper>
  );
}