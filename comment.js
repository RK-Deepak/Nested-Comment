class Comment
{
          constructor()
          {
           this.commentInput=document.querySelector("#commentInput");
           this.commentBtn=document.querySelector("#addCommentBtn");
           this.commentlist=document.querySelector("#commentList");

           this.bindEvents();
          }
          bindEvents()
          {
          this.commentBtn.addEventListener("click",()=>this.getinputvalue());
          }
          getinputvalue()
          {
                    const commentadded=this.commentInput.value.trim();
                    this.createcommentLi(commentadded);
          }
          createcommentLi(text)
          {
                    const li=document.createElement("li");
                    
                    const p= this.inserttextinLi(text);

                    li.appendChild(p);

                    
                    const replycontainer=this.replycontainer();
                    const btn=this.createbutton(replycontainer);
                  
                    replycontainer.appendChild(btn)
                    
                    li.appendChild(replycontainer)

                    this.commentlist.appendChild(li)
                    this.commentInput.value=""
          }

          replycontainer()
          {
                    const replycont=document.createElement("div");  
                    replycont.className="reply-container";

                    return replycont;
          }

          inserttextinLi(text)
          {
                   
                    const p=document.createElement("p");
                    p.textContent=text;

                    return p;
          }
          createbutton(replycont)
          {
              let btn=document.createElement("button");
              btn.className="button";
              btn.textContent="Reply"

             btn.addEventListener("click",()=>this.createinputfield(replycont))
             
              return btn;
          }
          createinputfield(replycont)
          {

                    const createreplieddiv=document.createElement("div");
                    
                   
                    const inputfield=document.createElement("input");

                    inputfield.className="reply-input-wrapper";
                    const btn=this.createbutton(createreplieddiv);
                    createreplieddiv.appendChild(inputfield);
                    createreplieddiv.appendChild(btn);
                    createreplieddiv.className="reply-container"




                    replycont.appendChild(createreplieddiv);

                   
                    

                    

          }

}
new Comment();