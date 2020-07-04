
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
            }else{
                this.setAttribute('state', 'more');
                this.innerHTML = '👇more';
            }
        });
    }

}