require("dotenv").config();
const express=require("express")
const cors=require("cors")
const path=require("path")
const authRoutes=require("./routes/authRoutes")
const incomeRoutes=require("./routes/incomeRoute")
const expenseRoutes=require("./routes/expenseRoutes")
const dashboardRoutes=require("./routes/dashboardRoutes")
const app=express();
const connectDB=require("./config/db")

app.use(

    cors({
        origin:'https://financialtracker-asxb.vercel.app',
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type", "Authorization"]
    })
);

app.use(express.json());
connectDB();


app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/income", incomeRoutes)
app.use("/api/v1/expense", expenseRoutes)
app.use("/api/v1/dashboard", dashboardRoutes)

//server uploads folder
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

app.use(express.static(path.join(__dirname, 'frontend', 'calc_expense_tracker', 'dist')));

// Fallback to 'index.html' for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'calc_expense_tracker', 'dist', 'index.html'));
});
app.use("/uploads",express.static(path.join(__dirname,'uploads'))); // Serve static files from the uploads directory
const PORT=process.env.PORT|| 8000;
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`);
});
