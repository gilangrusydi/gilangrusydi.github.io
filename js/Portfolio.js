
// Portfolio class by gilangrusydi

class Portfolio{
    
    constructor(){
        // first method to load
        this.listener();
    }

    // handle listen event
    listener(){
        // Toggle button
        $('#toggle').addEventListener('click', function(){
            // Add class toggle to container
            $('.container').classList.toggle('is-toggled');
            // Set status toggle to button
            if(this.getAttribute('state') == 'more'){
                this.setAttribute('state', 'less');
                this.innerHTML = '👆less';
                
                //Set bar animation
                setTimeout(()=>{
                    portfolio.runBarAnimation();
                },300);

            }else{
                this.setAttribute('state', 'more');
                this.innerHTML = '👇more';
                
                //remove bar 
                setTimeout(()=>{
                    portfolio.removeBar();
                },100);
            }
        });
    }

    //run bar animation
    runBarAnimation(){
        [...$('.progress-value')].forEach(bar =>{
            bar.style.width = `${bar.getAttribute('data-value')}%`;
        });
    }

    //remove bar value
    removeBar(){
        [...$('.progress-value')].forEach(bar =>{
            bar.removeAttribute('style');
        });
    }

}