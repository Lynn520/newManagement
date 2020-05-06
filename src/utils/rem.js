const resetRem = () => {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
} 
export default () =>{ 
    resetRem();
    window.addEventListener('resize',resetRem);
};