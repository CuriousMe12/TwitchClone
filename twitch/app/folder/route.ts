export function GET() {
  return Response.json({
    name: "Vishal Pandey",
    age: 25,
  });
}

// route -> router.route('/sdfdsfds').get(validation, auth, controller).patch()
// validations -> Joi schema pe validation of request body
// middleware ->
// controller ->  Extract request body => call service => return the answer for the same
// models -> collection + schema
// services -> DB calls for every controllers
