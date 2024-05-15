

const useVariant = () => {

    const menuVariant = {
        hidden: { opacity: 0,
                 x: "-100%" },
        show: {

        }
    }

    const menuArrowRotate = {
      hidden: {

        opacity: 0
      },
      show: {

        opacity: 1
      }
    }

    const menuChildren = {
      initial: { opacity: 0, scale: 0.8 },
      hover: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
    }

  return {
    menuVariant, menuArrowRotate, menuChildren
  }

}

export default useVariant

