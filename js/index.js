$(document).ready(function() {
    var x = "x";
    var o = "o";
    var count = 0
    var o_win = 0;
    var x_win = 0;

    function addLi() {
        var amount = $("#amount").val();
        var total = amount * amount
        
        $('#game').empty();

        for (var i = 0; i < total; i++) {
            var $liVar = $(`<li id=${i} class="btn span1">+</li>`);
            $('#game').append($liVar.clone());
        }
        $('#game li').click(function() {
            var $this = $(this);  
            if (conditional('o')) {
                removeFunction('O ')
            } else if (conditional('x')) {
                removeFunction('X ')
            } else if (count == 9) {
                removeFunction()
            } else if ($(this).hasClass('disable')) {
                alert('Already selected');
            } else if (count % 2 == 0) {
                count++;
                $this.text(o);
                $this.addClass('disable o btn-primary');
                if (conditional('o')) {
                    alert('O wins');
                    count = 0;
                    o_win++;
                    $('#o_win').text(o_win);
                }
            }  else {
                count++;
                $this.text(x);
                $this.addClass('disable x btn-info');
                if (conditional('x')) {
                    alert('X wins');
                    count = 0;
                    x_win++;
                    $('#x_win').text(x_win);
                }
            }
        
        })
    }

    window.addLi = addLi;

    $("#reset").click(function() {
        removeFunction('reset') 
    });

    function removeFunction(symbol) {
        if (symbol == undefined) {
            alert('It\'s a tie. It will restart.');
        } else if (symbol != 'reset' && symbol != undefined)  {
            alert(symbol + "has won the game. Start a new game");
        }
        $("#game li").text("+");
        $("#game li").removeClass('disable');
        $("#game li").removeClass('o');
        $("#game li").removeClass('x');
        $("#game li").removeClass('btn-primary');
        $("#game li").removeClass('btn-info');
        count = 0;
    }

    function conditional(symbol) {
        return ($("#0").hasClass(symbol) && $("#1").hasClass(symbol) && $("#2").hasClass(symbol)) ||
               ($("#3").hasClass(symbol) && $("#4").hasClass(symbol) && $("#5").hasClass(symbol)) ||
               ($("#6").hasClass(symbol) && $("#7").hasClass(symbol) && $("#8").hasClass(symbol)) ||
               ($("#0").hasClass(symbol) && $("#3").hasClass(symbol) && $("#6").hasClass(symbol)) ||
               ($("#1").hasClass(symbol) && $("#4").hasClass(symbol) && $("#7").hasClass(symbol)) ||
               ($("#2").hasClass(symbol) && $("#5").hasClass(symbol) && $("#8").hasClass(symbol)) ||
               ($("#0").hasClass(symbol) && $("#4").hasClass(symbol) && $("#8").hasClass(symbol)) ||
               ($("#2").hasClass(symbol) && $("#4").hasClass(symbol) && $("#6").hasClass(symbol));
    }
    
});
