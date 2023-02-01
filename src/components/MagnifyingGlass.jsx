import { MagnifyingGlass } from 'react-loader-spinner';

const MagnifyingGlas = () => {
  return (
    <div>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#434ff6"
      />
      ;
    </div>
  );
};
export default MagnifyingGlas;
