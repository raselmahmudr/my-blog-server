"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../jwt/index");
function getAuthID(req, res, next) {
    let token = req.headers["token"];
    if (!token) {
        res.status(409).json({ message: "You are unauthorized" });
        return;
    }
    (0, index_1.parseToken)(token).then(u => {
        req.user_id = u.id;
        req.user_email = u.email;
        next();
    }).catch(err => {
        console.log(err.message);
        res.status(409).json({ message: "You are unauthorized" });
        return;
    });
}
exports.default = getAuthID;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXV0aElELmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic3JjL21pZGRsZXdhcmVzL2dldEF1dGhJRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF5QztBQUV4QyxTQUFTLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDaEMsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUVoQyxJQUFHLENBQUMsS0FBSyxFQUFDO1FBQ1IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQyxDQUFBO1FBQ3ZELE9BQU07S0FDUDtJQUVELElBQUEsa0JBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLEVBQUU7UUFDeEIsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBQ2xCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUN4QixJQUFJLEVBQUUsQ0FBQTtJQUNSLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUEsRUFBRTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLHNCQUFzQixFQUFDLENBQUMsQ0FBQTtRQUN2RCxPQUFNO0lBQ1IsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBR0Qsa0JBQWUsU0FBUyxDQUFBIn0=