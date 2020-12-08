import jwt from "jsonwebtoken"

//Nota*: Guardar el Secret de JSON web token en la variables entorno. 

export const generateToken = (user) => {
	return jwt.sign({
		_id: user.id,
		name: user.name,
		email: user.email,
		isAdmin: user.isAdmin,
	}, process.env.JWT_SECRET || "somethingsecret", {
		expiresIn: "30d",
	});
}