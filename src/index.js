module.exports = function makeExchange(currency) {
    let H;
    let Q;
    let D;
    let N;
    let P;
    let remainder;
    let money = new Object();
    let error = new Object();
    error.error = "You are rich, my friend! We don't have so much coins for exchange";
    if (currency > 10000) {
        return error;
    }
    else {
        if (currency <= 0) {
            return {};
        }
        else {
            H = Math.floor(currency / 50);
            remainder = currency % 50;
            if (H > 0) {
                money.H = H;
            }
            Q = Math.floor(remainder / 25);
            remainder = remainder % 25;

            if (Q > 0) {
                money.Q = Q;
            }
            D = Math.floor(remainder / 10);
            remainder = remainder % 10;
            if (D > 0) {
                money.D = D;
            }
            N = Math.floor(remainder / 5);
            remainder = remainder % 5;
            if (N > 0) {
                money.N = N;
            }
            P = Math.floor(remainder / 1);
            if (P > 0) {
                money.P = P;
            }
            return money;
        }
    }

}
