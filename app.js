const { useState, useEffect, useMemo } = React;

// Translations
const translations = {
  ar: {
    // Sidebar
    appName: 'محفظتي',
    appSubtitle: 'نظام إدارة مالي',
    menuDashboard: 'الرئيسية',
    menuIncome: 'الدخل',
    menuExpenses: 'المصاريف',
    menuTasks: 'المهام',
    menuDebts: 'الديون',
    menuSettings: 'الإعدادات',
    footerText: 'إدارة أموالك بذكاء',
    footerSubtext: 'تابع دخلك ومصاريفك',
    toggleMenu: 'القائمة',
    
    // Dashboard
    dashboardTitle: 'لوحة التحكم',
    dashboardSubtitle: 'نظرة عامة على وضعك المالي',
    totalIncome: 'إجمالي الدخل',
    netIncome: 'الدخل الصافي',
    totalExpenses: 'إجمالي المصاريف',
    totalDebts: 'إجمالي الديون',
    pendingTasks: 'المهام المعلقة',
    workHours: 'عدد ساعات العمل',
    hours: 'ساعة',
    financialSummary: 'ملخص مالي',
    income: 'الدخل',
    commission: 'العمولة',
    net: 'الصافي',
    recentIncome: 'آخر الإيرادات',
    viewAll: 'عرض الكل',
    noIncomeYet: 'لا توجد إيرادات حتى الآن',
    
    // Income Page
    incomeTitle: 'إدارة الدخل',
    incomeSubtitle: 'تتبع إيراداتك اليومية',
    addIncome: 'إضافة دخل جديد',
    editIncome: 'تعديل الدخل',
    amountLabel: 'المبلغ',
    sourceLabel: 'المصدر',
    descriptionLabel: 'الوصف',
    hoursLabel: 'عدد الساعات',
    ordersLabel: 'عدد الطلبات المكتملة',
    cancelledOrdersLabel: 'عدد الطلبات الملغية',
    date: 'التاريخ',
    description: 'الوصف',
    save: 'حفظ',
    update: 'تحديث',
    cancel: 'إلغاء',
    incomeRecords: 'سجل الإيرادات',
    noIncomeRecords: 'لا توجد إيرادات مسجلة',
    commissionRate: 'نسبة العمولة',
    totalHours: 'إجمالي الساعات',
    totalOrdersLabel: 'الطلبات المكتملة',
    totalCancelledOrdersLabel: 'الطلبات الملغية',
    placeholderAmount: '0.00',
    placeholderSource: 'مثال: شركة XYZ',
    placeholderDescription: 'وصف إضافي...',
    searchPlaceholder: 'ابحث بالمصدر، الوصف، المبلغ أو التاريخ...',
    showFilters: 'إظهار الفلاتر',
    hideFilters: 'إخفاء الفلاتر',
    dateFrom: 'من تاريخ',
    dateTo: 'إلى تاريخ',
    amountMin: 'الحد الأدنى',
    amountMax: 'الحد الأقصى',
    filterSource: 'المصدر',
    showing: 'عرض',
    of: 'من',
    records: 'سجل',
    noSearchResults: 'لا توجد نتائج مطابقة للبحث',
    clearFilters: 'مسح الفلاتر',
    basicInfo: 'المعلومات الأساسية',
    workDetails: 'تفاصيل العمل',
    addIncomeDesc: 'أدخل التفاصيل لإضافة دخل جديد',
    editIncomeDesc: 'تحديث تفاصيل سجل الدخل',
    
    // Expenses Page
    expensesTitle: 'إدارة المصاريف',
    expensesSubtitle: 'تتبع مصاريفك اليومية',
    addExpense: 'إضافة مصروف جديد',
    editExpense: 'تعديل المصروف',
    category: 'الفئة',
    selectCategory: 'اختر الفئة',
    categories: {
      food: 'طعام وشراب',
      transport: 'مواصلات',
      shopping: 'تسوق',
      bills: 'فواتير',
      health: 'صحة',
      entertainment: 'ترفيه',
      education: 'تعليم',
      other: 'أخرى'
    },
    expenseRecords: 'سجل المصاريف',
    noExpenseRecords: 'لا توجد مصاريف مسجلة',
    
    // Tasks Page
    tasksTitle: 'إدارة المهام',
    tasksSubtitle: 'تنظيم مهامك ومواعيدك',
    addTask: 'إضافة مهمة جديدة',
    editTask: 'تعديل المهمة',
    taskTitle: 'عنوان المهمة',
    priority: 'الأولوية',
    dueDate: 'تاريخ الاستحقاق',
    priorities: {
      high: 'عالي',
      medium: 'متوسط',
      low: 'منخفض'
    },
    completedTasks: 'المهام المكتملة',
    pendingTasksLabel: 'المهام المعلقة',
    taskRecords: 'قائمة المهام',
    noTaskRecords: 'لا توجد مهام مسجلة',
    
    // Debts Page
    debtsTitle: 'إدارة الديون',
    debtsSubtitle: 'تتبع الديون والمستحقات',
    addDebt: 'إضافة دين جديد',
    editDebt: 'تعديل الدين',
    personName: 'اسم الشخص',
    debtType: 'نوع الدين',
    debtOwed: 'دين عليّ (أدفع)',
    debtOwedToMe: 'دين لي (أستلم)',
    myDebts: 'ديون عليّ (غير مسددة)',
    debtsToMe: 'ديون لي (غير مستلمة)',
    debtRecords: 'سجل الديون',
    noDebtRecords: 'لا توجد ديون مسجلة',
    
    // Settings Page
    settingsTitle: 'الإعدادات',
    settingsSubtitle: 'تخصيص إعدادات التطبيق',
    language: 'اللغة',
    currency: 'العملة الافتراضية',
    commissionSettings: 'نسبة العمولة/الخصم من الدخل (%)',
    currencyHelp: 'سيتم عرض جميع المبالغ بهذه العملة',
    commissionHelp: 'سيتم خصم هذه النسبة تلقائياً من إجمالي الدخل لحساب الدخل الصافي',
    dataManagement: 'إدارة البيانات',
    deleteAllData: 'حذف جميع البيانات',
    exportData: 'تصدير البيانات',
    importData: 'استيراد البيانات',
    importConfirm: 'سيتم استبدال جميع البيانات الموجودة. هل تريد المتابعة؟',
    importSuccess: 'تم استيراد البيانات بنجاح!',
    importError: 'خطأ في استيراد البيانات: ',
    saveSettings: 'حفظ الإعدادات',
    settingsSaved: 'تم حفظ الإعدادات بنجاح!',
    deleteConfirm: 'هل أنت متأكد من حذف جميع البيانات؟ هذا الإجراء لا يمكن التراجع عنه.',
    theme: 'المظهر',
    lightMode: 'فاتح',
    darkMode: 'داكن',
    languages: {
      ar: 'العربية',
      en: 'English'
    }
  },
  
  en: {
    // Sidebar
    appName: 'My Wallet',
    appSubtitle: 'Financial Management System',
    menuDashboard: 'Dashboard',
    menuIncome: 'Income',
    menuExpenses: 'Expenses',
    menuTasks: 'Tasks',
    menuDebts: 'Debts',
    menuSettings: 'Settings',
    footerText: 'Smart Money Management',
    footerSubtext: 'Track your income & expenses',
    toggleMenu: 'Menu',
    
    // Dashboard
    dashboardTitle: 'Dashboard',
    dashboardSubtitle: 'Overview of your financial status',
    totalIncome: 'Total Income',
    netIncome: 'Net Income',
    totalExpenses: 'Total Expenses',
    totalDebts: 'Total Debts',
    pendingTasks: 'Pending Tasks',
    workHours: 'Work Hours',
    hours: 'hours',
    financialSummary: 'Financial Summary',
    income: 'Income',
    commission: 'Commission',
    net: 'Net',
    recentIncome: 'Recent Income',
    viewAll: 'View All',
    noIncomeYet: 'No income records yet',
    
    // Income Page
    incomeTitle: 'Income Management',
    incomeSubtitle: 'Track your daily income',
    addIncome: 'Add New Income',
    editIncome: 'Edit Income',
    amountLabel: 'Amount',
    sourceLabel: 'Source',
    descriptionLabel: 'Description',
    hoursLabel: 'Hours',
    ordersLabel: 'Completed Orders',
    cancelledOrdersLabel: 'Cancelled Orders',
    date: 'Date',
    description: 'Description',
    save: 'Save',
    update: 'Update',
    cancel: 'Cancel',
    incomeRecords: 'Income Records',
    noIncomeRecords: 'No income records',
    commissionRate: 'Commission Rate',
    totalHours: 'Total Hours',
    totalOrdersLabel: 'Completed Orders',
    totalCancelledOrdersLabel: 'Cancelled Orders',
    placeholderAmount: '0.00',
    placeholderSource: 'e.g. XYZ Company',
    placeholderDescription: 'Additional description...',
    searchPlaceholder: 'Search by source, description, amount or date...',
    showFilters: 'Show Filters',
    hideFilters: 'Hide Filters',
    dateFrom: 'From Date',
    dateTo: 'To Date',
    amountMin: 'Min Amount',
    amountMax: 'Max Amount',
    filterSource: 'Source',
    showing: 'Showing',
    of: 'of',
    records: 'records',
    noSearchResults: 'No matching records found',
    clearFilters: 'Clear Filters',
    basicInfo: 'Basic Information',
    workDetails: 'Work Details',
    addIncomeDesc: 'Fill in the details to add new income',
    editIncomeDesc: 'Update income record details',
    
    // Expenses Page
    expensesTitle: 'Expense Management',
    expensesSubtitle: 'Track your daily expenses',
    addExpense: 'Add New Expense',
    editExpense: 'Edit Expense',
    category: 'Category',
    selectCategory: 'Select Category',
    categories: {
      food: 'Food & Drinks',
      transport: 'Transportation',
      shopping: 'Shopping',
      bills: 'Bills',
      health: 'Health',
      entertainment: 'Entertainment',
      education: 'Education',
      other: 'Other'
    },
    expenseRecords: 'Expense Records',
    noExpenseRecords: 'No expense records',
    
    // Tasks Page
    tasksTitle: 'Task Management',
    tasksSubtitle: 'Organize your tasks and deadlines',
    addTask: 'Add New Task',
    editTask: 'Edit Task',
    taskTitle: 'Task Title',
    priority: 'Priority',
    dueDate: 'Due Date',
    priorities: {
      high: 'High',
      medium: 'Medium',
      low: 'Low'
    },
    completedTasks: 'Completed Tasks',
    pendingTasksLabel: 'Pending Tasks',
    taskRecords: 'Task List',
    noTaskRecords: 'No tasks recorded',
    
    // Debts Page
    debtsTitle: 'Debt Management',
    debtsSubtitle: 'Track debts and receivables',
    addDebt: 'Add New Debt',
    editDebt: 'Edit Debt',
    personName: 'Person Name',
    debtType: 'Debt Type',
    debtOwed: 'I Owe (Pay)',
    debtOwedToMe: 'Owed to Me (Receive)',
    myDebts: 'My Debts (Unpaid)',
    debtsToMe: 'Debts to Me (Unreceived)',
    debtRecords: 'Debt Records',
    noDebtRecords: 'No debts recorded',
    
    // Settings Page
    settingsTitle: 'Settings',
    settingsSubtitle: 'Customize app settings',
    language: 'Language',
    currency: 'Default Currency',
    commissionSettings: 'Commission/Deduction Rate from Income (%)',
    currencyHelp: 'All amounts will be displayed in this currency',
    commissionHelp: 'This percentage will be automatically deducted from total income to calculate net income',
    dataManagement: 'Data Management',
    deleteAllData: 'Delete All Data',
    exportData: 'Export Data',
    importData: 'Import Data',
    importConfirm: 'This will replace all existing data. Continue?',
    importSuccess: 'Data imported successfully!',
    importError: 'Error importing data: ',
    saveSettings: 'Save Settings',
    settingsSaved: 'Settings saved successfully!',
    deleteConfirm: 'Are you sure you want to delete all data? This action cannot be undone.',
    theme: 'Theme',
    lightMode: 'Light',
    darkMode: 'Dark',
    languages: {
      ar: 'العربية',
      en: 'English'
    }
  }
};

// Icons Component
const Icons = {
    Dashboard: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('rect', { x: "3", y: "3", width: "7", height: "7" }),
        React.createElement('rect', { x: "14", y: "3", width: "7", height: "7" }),
        React.createElement('rect', { x: "14", y: "14", width: "7", height: "7" }),
        React.createElement('rect', { x: "3", y: "14", width: "7", height: "7" })
    ),
    Income: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('path', { d: "M12 2v20" }),
        React.createElement('path', { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" })
    ),
    Expenses: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('path', { d: "M4 10h16" }),
        React.createElement('path', { d: "M4 14h16" }),
        React.createElement('path', { d: "M4 18h16" }),
        React.createElement('path', { d: "M4 6h16" })
    ),
    Tasks: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('path', { d: "M9 11l3 3L22 4" }),
        React.createElement('path', { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" })
    ),
    Debts: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('path', { d: "M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }),
        React.createElement('rect', { x: "9", y: "9", width: "12", height: "10", rx: "2" }),
        React.createElement('path', { d: "M14 15h.01" }),
        React.createElement('path', { d: "M17 15h.01" })
    ),
    Settings: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('path', { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }),
        React.createElement('circle', { cx: "12", cy: "12", r: "3" })
    ),
    Plus: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('path', { d: "M12 5v14" }),
        React.createElement('path', { d: "M5 12h14" })
    ),
    Trash: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('path', { d: "M3 6h18" }),
        React.createElement('path', { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
        React.createElement('path', { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })
    ),
    Edit: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('path', { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })
    ),
    Check: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('path', { d: "M20 6L9 17l-5-5" })
    ),
    Calendar: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('rect', { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
        React.createElement('line', { x1: "16", y1: "2", x2: "16", y2: "6" }),
        React.createElement('line', { x1: "8", y1: "2", x2: "8", y2: "6" }),
        React.createElement('line', { x1: "3", y1: "10", x2: "21", y2: "10" })
    ),
    Clock: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('circle', { cx: "12", cy: "12", r: "10" }),
        React.createElement('polyline', { points: "12 6 12 12 16 14" })
    ),
    TrendingUp: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('polyline', { points: "23 6 13.5 15.5 8.5 10.5 1 18" }),
        React.createElement('polyline', { points: "17 6 23 6 23 12" })
    ),
    TrendingDown: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('polyline', { points: "23 18 13.5 8.5 8.5 13.5 1 6" }),
        React.createElement('polyline', { points: "17 18 23 18 23 12" })
    ),
    Wallet: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('path', { d: "M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" }),
        React.createElement('path', { d: "M20 12v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" }),
        React.createElement('path', { d: "M20 12h-4" })
    ),
    Package: (props = {}) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement('line', { x1: "16.5", y1: "9.4", x2: "7.5", y2: "4.21" }),
        React.createElement('path', { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
        React.createElement('polyline', { points: "3.27 6.96 12 12.01 20.73 6.96" }),
        React.createElement('line', { x1: "12", y1: "22.08", x2: "12", y2: "12" })
    )
};

// Helper function to get translation
const t = (lang, key) => {
  const keys = key.split('.');
  let value = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
};

// Helper function to get English day name from date string
const getEnglishDayName = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
};

// Currency symbols
const currencySymbols = {
    'SAR': 'SAR',
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'AED': 'AED',
    'KWD': 'KWD',
    'QAR': 'QAR',
    'OMR': 'OMR',
    'BHD': 'BHD',
    'EGP': 'EGP',
    'JOD': 'JOD',
    'LBP': 'LBP'
};

// IndexedDB Database Helper
const DB_NAME = 'FinanceManagerDB';
const DB_VERSION = 1;

const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            
            // Create object stores
            if (!db.objectStoreNames.contains('income')) {
                db.createObjectStore('income', { keyPath: 'id', autoIncrement: true });
            }
            if (!db.objectStoreNames.contains('expenses')) {
                db.createObjectStore('expenses', { keyPath: 'id', autoIncrement: true });
            }
            if (!db.objectStoreNames.contains('tasks')) {
                db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
            }
            if (!db.objectStoreNames.contains('debts')) {
                db.createObjectStore('debts', { keyPath: 'id', autoIncrement: true });
            }
            if (!db.objectStoreNames.contains('settings')) {
                db.createObjectStore('settings', { keyPath: 'id' });
            }
        };
    });
};

const dbOperations = {
    async getAll(storeName) {
        try {
            const db = await openDB();
            return new Promise((resolve, reject) => {
                const transaction = db.transaction(storeName, 'readonly');
                const store = transaction.objectStore(storeName);
                const request = store.getAll();
                
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
        } catch (error) {
            console.error('DB Error:', error);
            return [];
        }
    },
    
    async save(storeName, data) {
        try {
            const db = await openDB();
            return new Promise((resolve, reject) => {
                const transaction = db.transaction(storeName, 'readwrite');
                const store = transaction.objectStore(storeName);
                
                // Clear existing data
                store.clear();
                
                // Add new data
                data.forEach(item => {
                    store.add(item);
                });
                
                transaction.oncomplete = () => resolve(true);
                transaction.onerror = () => reject(transaction.error);
            });
        } catch (error) {
            console.error('DB Save Error:', error);
            return false;
        }
    },
    
    async getSettings() {
        try {
            const db = await openDB();
            return new Promise((resolve, reject) => {
                const transaction = db.transaction('settings', 'readonly');
                const store = transaction.objectStore('settings');
                const request = store.get('main');
                
                request.onsuccess = () => resolve(request.result || null);
                request.onerror = () => reject(request.error);
            });
        } catch (error) {
            console.error('DB Settings Error:', error);
            return null;
        }
    },
    
    async saveSettings(settings) {
        try {
            const db = await openDB();
            return new Promise((resolve, reject) => {
                const transaction = db.transaction('settings', 'readwrite');
                const store = transaction.objectStore('settings');
                const request = store.put({ ...settings, id: 'main' });
                
                request.onsuccess = () => resolve(true);
                request.onerror = () => reject(request.error);
            });
        } catch (error) {
            console.error('DB Save Settings Error:', error);
            return false;
        }
    },
    
    async exportAll() {
        try {
            const [income, expenses, tasks, debts, settings] = await Promise.all([
                this.getAll('income'),
                this.getAll('expenses'),
                this.getAll('tasks'),
                this.getAll('debts'),
                this.getSettings()
            ]);
            
            return {
                income,
                expenses,
                tasks,
                debts,
                settings
            };
        } catch (error) {
            console.error('Export Error:', error);
            return null;
        }
    },
    
    async importAll(data) {
        try {
            await Promise.all([
                this.save('income', data.income || []),
                this.save('expenses', data.expenses || []),
                this.save('tasks', data.tasks || []),
                this.save('debts', data.debts || [])
            ]);
            
            if (data.settings) {
                await this.saveSettings(data.settings);
            }
            
            return true;
        } catch (error) {
            console.error('Import Error:', error);
            return false;
        }
    },
    
    async clearAll() {
        try {
            const db = await openDB();
            const stores = ['income', 'expenses', 'tasks', 'debts', 'settings'];
            
            for (const storeName of stores) {
                const transaction = db.transaction(storeName, 'readwrite');
                const store = transaction.objectStore(storeName);
                await store.clear();
            }
            
            return true;
        } catch (error) {
            console.error('Clear Error:', error);
            return false;
        }
    }
};

// Migration from localStorage to IndexedDB
const migrateFromLocalStorage = async () => {
    try {
        const oldData = {
            income: JSON.parse(localStorage.getItem('income') || '[]'),
            expenses: JSON.parse(localStorage.getItem('expenses') || '[]'),
            tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
            debts: JSON.parse(localStorage.getItem('debts') || '[]'),
            settings: JSON.parse(localStorage.getItem('settings') || '{}')
        };
        
        if (oldData.income.length || oldData.expenses.length || 
            oldData.tasks.length || oldData.debts.length || 
            Object.keys(oldData.settings).length) {
            
            await dbOperations.save('income', oldData.income);
            await dbOperations.save('expenses', oldData.expenses);
            await dbOperations.save('tasks', oldData.tasks);
            await dbOperations.save('debts', oldData.debts);
            await dbOperations.saveSettings(oldData.settings);
            
            // Clear localStorage after migration
            localStorage.removeItem('income');
            localStorage.removeItem('expenses');
            localStorage.removeItem('tasks');
            localStorage.removeItem('debts');
            localStorage.removeItem('settings');
            
            console.log('Migration completed successfully!');
        }
    } catch (error) {
        console.error('Migration Error:', error);
    }
};

// Toast Notification Component
function Toast({ message, type = 'success', onClose }) {
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
        }, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };

    const colors = {
        success: 'bg-emerald-500',
        error: 'bg-red-500',
        warning: 'bg-amber-500',
        info: 'bg-blue-500'
    };

    return React.createElement('div', {
        className: `fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`,
        style: { direction: 'rtl' }
    },
        React.createElement('div', {
            className: `${colors[type]} text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[300px] backdrop-blur-sm bg-opacity-95`
        },
            React.createElement('div', {
                className: 'w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold'
            }, icons[type]),
            React.createElement('div', { className: 'flex-1' },
                React.createElement('p', { className: 'font-medium text-base' }, message)
            ),
            React.createElement('button', {
                onClick: () => {
                    setIsVisible(false);
                    setTimeout(onClose, 300);
                },
                className: 'w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors'
            }, '×')
        )
    );
}

// Toast Context
const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);

    const showToast = (message, type = 'success') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return React.createElement(ToastContext.Provider, { value: { showToast } },
        children,
        toasts.map(toast => 
            React.createElement(Toast, {
                key: toast.id,
                message: toast.message,
                type: toast.type,
                onClose: () => removeToast(toast.id)
            })
        )
    );
}

// Animated Number Component
function AnimatedNumber({ value, duration = 1000, decimals = 0 }) {
    const [displayValue, setDisplayValue] = React.useState(0);
    
    React.useEffect(() => {
        let startTime = null;
        const startValue = displayValue;
        const endValue = value;
        
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const currentValue = startValue + (endValue - startValue) * easeProgress;
            setDisplayValue(currentValue);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }, [value, duration]);
    
    return React.createElement('span', { className: 'number-animate' },
        decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toLocaleString('en-US')
    );
}

// Chart Component
function ChartComponent({ type, data, options = {} }) {
    const canvasRef = React.useRef(null);
    const chartRef = React.useRef(null);
    
    React.useEffect(() => {
        if (!canvasRef.current) return;
        
        const ctx = canvasRef.current.getContext('2d');
        
        if (chartRef.current) {
            chartRef.current.destroy();
        }
        
        chartRef.current = new Chart(ctx, {
            type: type,
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: { size: 12 }
                        }
                    }
                },
                ...options
            }
        });
        
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [data, type, options]);
    
    return React.createElement('canvas', { ref: canvasRef });
}

// Search Filter Component
function SearchFilter({ placeholder, value, onChange, className = '' }) {
    return React.createElement('div', { className: `relative ${className}` },
        React.createElement('input', {
            type: 'text',
            value: value,
            onChange: (e) => onChange(e.target.value),
            placeholder: placeholder,
            className: 'w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 input-focus focus:outline-none focus:border-secondary-400 bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white transition-colors'
        }),
        React.createElement('span', { className: 'absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' },
            '🔍'
        )
    );
}

// Date Range Filter Component
function DateRangeFilter({ startDate, endDate, onStartChange, onEndChange, currentLang, t }) {
    return React.createElement('div', { className: 'flex gap-3 items-center' },
        React.createElement('input', {
            type: 'date',
            value: startDate,
            onChange: (e) => onStartChange(e.target.value),
            className: 'px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-secondary-400 bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white'
        }),
        React.createElement('span', { className: 'text-gray-500' }, '→'),
        React.createElement('input', {
            type: 'date',
            value: endDate,
            onChange: (e) => onEndChange(e.target.value),
            className: 'px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-secondary-400 bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white'
        })
    );
}

// DateTime Display Component
function DateTimeDisplay({ currentLang }) {
    const [dateTime, setDateTime] = React.useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('en-US', options);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    };

    return React.createElement('div', {
        className: 'flex items-center gap-3 bg-gradient-to-r from-violet-500/10 to-purple-500/10 dark:from-violet-500/20 dark:to-purple-500/20 px-4 py-2 rounded-xl border border-violet-200 dark:border-violet-700/50'
    },
        React.createElement('div', { className: 'flex flex-col items-end' },
            React.createElement('div', {
                className: 'text-sm font-semibold text-violet-700 dark:text-violet-300 flex items-center gap-2'
            },
                React.createElement('svg', {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                    React.createElement('circle', { cx: "12", cy: "12", r: "10" }),
                    React.createElement('polyline', { points: "12 6 12 12 16 14" })
                ),
                formatTime(dateTime)
            ),
            React.createElement('div', {
                className: 'text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1'
            },
                React.createElement('svg', {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                    React.createElement('rect', { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                    React.createElement('line', { x1: "16", y1: "2", x2: "16", y2: "6" }),
                    React.createElement('line', { x1: "8", y1: "2", x2: "8", y2: "6" }),
                    React.createElement('line', { x1: "3", y1: "10", x2: "21", y2: "10" })
                ),
                formatDate(dateTime)
            )
        )
    );
}

// App Component
function App() {
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [settings, setSettings] = useState({
        currency: 'EUR',
        language: 'ar',
        commissionRate: 0,
        darkMode: true
    });
    
    const [income, setIncome] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [debts, setDebts] = useState([]);
    const [dbReady, setDbReady] = useState(false);

    // Load data from IndexedDB on mount
    useEffect(() => {
        const loadData = async () => {
            // First try to migrate old localStorage data
            await migrateFromLocalStorage();
            
            // Then load from IndexedDB
            const [savedIncome, savedExpenses, savedTasks, savedDebts, savedSettings] = await Promise.all([
                dbOperations.getAll('income'),
                dbOperations.getAll('expenses'),
                dbOperations.getAll('tasks'),
                dbOperations.getAll('debts'),
                dbOperations.getSettings()
            ]);
            
            if (savedIncome.length) setIncome(savedIncome);
            if (savedExpenses.length) setExpenses(savedExpenses);
            if (savedTasks.length) setTasks(savedTasks);
            if (savedDebts.length) setDebts(savedDebts);
            if (savedSettings) setSettings(prev => ({ ...prev, ...savedSettings }));
            
            setDbReady(true);
        };
        
        loadData();
    }, []);

    // Save data to IndexedDB whenever data changes
    useEffect(() => {
        if (!dbReady) return;
        
        const saveData = async () => {
            await Promise.all([
                dbOperations.saveSettings(settings),
                dbOperations.save('income', income),
                dbOperations.save('expenses', expenses),
                dbOperations.save('tasks', tasks),
                dbOperations.save('debts', debts)
            ]);
        };
        
        saveData();
    }, [settings, income, expenses, tasks, debts, dbReady]);

    const currencySymbol = currencySymbols[settings.currency] || settings.currency;
    const currentLang = settings.language || 'ar';
    const darkMode = settings.darkMode || false;
    
    // Update document direction and dark mode based on settings
    useEffect(() => {
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [currentLang, darkMode]);

    const renderPage = () => {
        switch(currentPage) {
            case 'dashboard':
                return React.createElement(Dashboard, { 
                    income, expenses, tasks, debts, 
                    currencySymbol, settings, currentLang, t,
                    setCurrentPage
                });
            case 'income':
                return React.createElement(IncomePage, { 
                    income, setIncome, 
                    currencySymbol, settings, currentLang, t
                });
            case 'expenses':
                return React.createElement(ExpensesPage, { 
                    expenses, setExpenses, 
                    currencySymbol, currentLang, t
                });
            case 'tasks':
                return React.createElement(TasksPage, { 
                    tasks, setTasks, currentLang, t
                });
            case 'debts':
                return React.createElement(DebtsPage, { 
                    debts, setDebts, 
                    currencySymbol, currentLang, t
                });
            case 'settings':
                return React.createElement(SettingsPage, { 
                    settings, setSettings, currentLang, t, dbOperations
                });
            default:
                return React.createElement(Dashboard, { 
                    income, expenses, tasks, debts, 
                    currencySymbol, settings, currentLang, t,
                    setCurrentPage
                });
        }
    };

    return React.createElement('div', { 
        className: `flex h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300 ${currentLang === 'ar' ? 'font-cairo' : 'font-sans'}` 
    },
        // Sidebar
        React.createElement(Sidebar, { currentPage, setCurrentPage, currentLang, t, darkMode, sidebarOpen, setSidebarOpen }),
        // Main Content
        React.createElement('div', { className: 'flex-1 overflow-auto' },
            // Header with hamburger menu
            React.createElement('header', { 
                className: `sticky top-0 z-30 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 transition-all duration-300 ${sidebarOpen ? 'lg:ml-0' : 'lg:ml-0'}`
            },
                React.createElement('div', { className: 'px-4 py-3 flex items-center justify-between gap-3' },
                    React.createElement('div', { className: 'flex items-center gap-3' },
                        // Hamburger menu button
                        React.createElement('button', {
                            onClick: () => setSidebarOpen(!sidebarOpen),
                            className: `p-2 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-slate-700 ${
                                sidebarOpen ? 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600' : 'text-gray-600 dark:text-gray-300'
                            }`,
                            'aria-label': t(currentLang, 'toggleMenu')
                        },
                            React.createElement('svg', { 
                                xmlns: "http://www.w3.org/2000/svg", 
                                width: "24", 
                                height: "24", 
                                viewBox: "0 0 24 24", 
                                fill: "none", 
                                stroke: "currentColor", 
                                strokeWidth: "2", 
                                strokeLinecap: "round", 
                                strokeLinejoin: "round" 
                            },
                                React.createElement('line', { x1: "3", y1: "12", x2: "21", y2: "12" }),
                                React.createElement('line', { x1: "3", y1: "6", x2: "21", y2: "6" }),
                                React.createElement('line', { x1: "3", y1: "18", x2: "21", y2: "18" })
                            )
                        ),
                        // Page title
                        React.createElement('h2', { 
                            className: 'text-lg font-semibold text-gray-800 dark:text-white'
                        }, 
                            t(currentLang, currentPage === 'dashboard' ? 'dashboardTitle' : 
                               currentPage === 'income' ? 'incomeTitle' : 
                               currentPage === 'expenses' ? 'expensesTitle' : 
                               currentPage === 'tasks' ? 'tasksTitle' : 
                               currentPage === 'debts' ? 'debtsTitle' : 
                               currentPage === 'settings' ? 'settingsTitle' : 'dashboardTitle')
                        )
                    ),
                    // DateTime Display
                    React.createElement(DateTimeDisplay, { currentLang })
                )
            ),
            // Page content
            React.createElement('div', { className: 'p-4 lg:p-8' },
                renderPage()
            )
        )
    );
}

// Sidebar Component
function Sidebar({ currentPage, setCurrentPage, currentLang, t, darkMode, sidebarOpen, setSidebarOpen }) {
    const menuItems = [
        { id: 'dashboard', labelKey: 'menuDashboard', icon: Icons.Dashboard },
        { id: 'income', labelKey: 'menuIncome', icon: Icons.Income },
        { id: 'expenses', labelKey: 'menuExpenses', icon: Icons.Expenses },
        { id: 'tasks', labelKey: 'menuTasks', icon: Icons.Tasks },
        { id: 'debts', labelKey: 'menuDebts', icon: Icons.Debts },
        { id: 'settings', labelKey: 'menuSettings', icon: Icons.Settings },
    ];

    const HamburgerIcon = () => React.createElement('svg', { 
        xmlns: "http://www.w3.org/2000/svg", 
        width: "24", 
        height: "24", 
        viewBox: "0 0 24 24", 
        fill: "none", 
        stroke: "currentColor", 
        strokeWidth: "2", 
        strokeLinecap: "round", 
        strokeLinejoin: "round" 
    },
        React.createElement('line', { x1: "3", y1: "12", x2: "21", y2: "12" }),
        React.createElement('line', { x1: "3", y1: "6", x2: "21", y2: "6" }),
        React.createElement('line', { x1: "3", y1: "18", x2: "21", y2: "18" })
    );

    const CloseIcon = () => React.createElement('svg', { 
        xmlns: "http://www.w3.org/2000/svg", 
        width: "24", 
        height: "24", 
        viewBox: "0 0 24 24", 
        fill: "none", 
        stroke: "currentColor", 
        strokeWidth: "2", 
        strokeLinecap: "round", 
        strokeLinejoin: "round" 
    },
        React.createElement('line', { x1: "18", y1: "6", x2: "6", y2: "18" }),
        React.createElement('line', { x1: "6", y1: "6", x2: "18", y2: "18" })
    );

    return React.createElement(React.Fragment, null,
        // Mobile overlay
        React.createElement('div', {
            className: `fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`,
            onClick: () => setSidebarOpen(false)
        }),
        // Sidebar
        React.createElement('aside', { 
            className: `fixed lg:sticky top-0 h-screen bg-white dark:bg-slate-800 shadow-2xl z-50 transition-all duration-300 ease-in-out ${
                sidebarOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full lg:translate-x-0 lg:w-0'
            } ${currentLang === 'ar' ? 'right-0 lg:right-auto' : 'left-0 lg:left-auto'} overflow-hidden`
        },
            React.createElement('div', { className: 'w-72 h-full flex flex-col' },
                // Header with toggle button
                React.createElement('div', { className: 'p-6 border-b border-gray-100 dark:border-slate-700' },
                    React.createElement('div', { className: 'flex items-center justify-between' },
                        // Logo
                        React.createElement('div', { className: 'flex items-center gap-3 animate-scale-in' },
                            React.createElement('div', { className: 'w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg' },
                                React.createElement(Icons.Wallet, { className: 'text-white w-5 h-5' })
                            ),
                            React.createElement('div', {},
                                React.createElement('h1', { className: 'text-lg font-bold text-gray-800 dark:text-white' }, t(currentLang, 'appName')),
                                React.createElement('p', { className: 'text-xs text-gray-500 dark:text-gray-400' }, t(currentLang, 'appSubtitle'))
                            )
                        ),
                        // Close button (mobile)
                        React.createElement('button', {
                            onClick: () => setSidebarOpen(false),
                            className: 'lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors',
                            'aria-label': t(currentLang, 'toggleMenu')
                        }, React.createElement(CloseIcon))
                    )
                ),
                // Menu Items
                React.createElement('nav', { className: 'flex-1 px-4 py-6 space-y-2 overflow-y-auto' },
                    menuItems.map((item, index) => 
                        React.createElement('button', {
                            key: item.id,
                            onClick: () => {
                                setCurrentPage(item.id);
                                if (window.innerWidth < 1024) setSidebarOpen(false);
                            },
                            className: `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 sidebar-item animate-slide-up ${
                                currentPage === item.id 
                                    ? 'active text-secondary-600 font-semibold bg-gradient-to-r from-secondary-50 to-purple-50 dark:from-secondary-900/30 dark:to-purple-900/30 shadow-md' 
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700/50'
                            } ${currentLang === 'ar' ? 'text-right' : 'text-left'}`,
                            style: { animationDelay: `${index * 0.05}s` }
                        },
                            React.createElement('div', { className: 'p-1.5 rounded-lg bg-gradient-to-br from-secondary-500 to-purple-600 shadow-sm' },
                                React.createElement(item.icon, { className: 'text-white w-4 h-4' })
                            ),
                            React.createElement('span', { className: 'font-medium' }, t(currentLang, item.labelKey))
                        )
                    )
                ),
                // Bottom decoration
                React.createElement('div', { className: 'p-4' },
                    React.createElement('div', { className: 'gradient-bg rounded-2xl p-4 text-white text-center shadow-lg animate-float' },
                        React.createElement('p', { className: 'text-sm font-medium' }, t(currentLang, 'footerText')),
                        React.createElement('p', { className: 'text-xs opacity-80 mt-1' }, t(currentLang, 'footerSubtext'))
                    )
                )
            )
        )
    );
}

// Dashboard Component
function Dashboard({ income, expenses, tasks, debts, currencySymbol, settings, setCurrentPage, currentLang, t }) {
    const totalIncome = income.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);
    const totalExpenses = expenses.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);
    const commissionAmount = totalIncome * (settings.commissionRate / 100);
    const netIncome = totalIncome - commissionAmount - totalExpenses;
    const totalDebts = debts.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);
    const pendingTasks = tasks.filter(t => !t.completed).length;
    const totalHours = income.reduce((sum, item) => sum + parseFloat(item.hours || 0), 0);

    const locale = currentLang === 'ar' ? 'ar-SA' : 'en-US';
    
    // Chart data for income vs expenses
    const chartData = React.useMemo(() => ({
        labels: [t(currentLang, 'income'), t(currentLang, 'totalExpenses'), t(currentLang, 'net')],
        datasets: [{
            label: t(currentLang, 'amount'),
            data: [totalIncome, totalExpenses, netIncome],
            backgroundColor: ['#10b981', '#ef4444', '#3b82f6'],
            borderColor: ['#059669', '#dc2626', '#2563eb'],
            borderWidth: 2,
            borderRadius: 8,
        }]
    }), [totalIncome, totalExpenses, netIncome, currentLang]);
    
    // Pie chart for income vs expenses
    const pieChartData = React.useMemo(() => ({
        labels: [t(currentLang, 'income'), t(currentLang, 'totalExpenses')],
        datasets: [{
            data: [totalIncome, totalExpenses],
            backgroundColor: ['#10b981', '#ef4444'],
            borderColor: ['#ffffff', '#ffffff'],
            borderWidth: 2,
        }]
    }), [totalIncome, totalExpenses, currentLang]);

    const stats = [
        { 
            title: t(currentLang, 'totalIncome'), 
            value: totalIncome, 
            animated: true,
            symbol: currencySymbol,
            icon: Icons.Income, 
            color: 'bg-emerald-500',
            textColor: 'text-emerald-600 dark:text-emerald-400',
            bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
            onClick: () => setCurrentPage('income')
        },
        { 
            title: t(currentLang, 'netIncome'), 
            value: netIncome, 
            animated: true,
            symbol: currencySymbol,
            icon: Icons.Wallet, 
            color: 'bg-blue-500',
            textColor: 'text-blue-600 dark:text-blue-400',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            onClick: () => setCurrentPage('income')
        },
        { 
            title: t(currentLang, 'totalExpenses'), 
            value: totalExpenses, 
            animated: true,
            symbol: currencySymbol,
            icon: Icons.TrendingDown, 
            color: 'bg-red-500',
            textColor: 'text-red-600 dark:text-red-400',
            bgColor: 'bg-red-50 dark:bg-red-900/20',
            onClick: () => setCurrentPage('expenses')
        },
        { 
            title: t(currentLang, 'totalDebts'), 
            value: totalDebts, 
            animated: true,
            symbol: currencySymbol,
            icon: Icons.Debts, 
            color: 'bg-orange-500',
            textColor: 'text-orange-600 dark:text-orange-400',
            bgColor: 'bg-orange-50 dark:bg-orange-900/20',
            onClick: () => setCurrentPage('debts')
        },
        { 
            title: t(currentLang, 'pendingTasks'), 
            value: pendingTasks, 
            animated: true,
            symbol: '',
            icon: Icons.Tasks, 
            color: 'bg-purple-500',
            textColor: 'text-purple-600 dark:text-purple-400',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20',
            onClick: () => setCurrentPage('tasks')
        },
        { 
            title: t(currentLang, 'workHours'), 
            value: totalHours, 
            animated: true,
            symbol: t(currentLang, 'hours'),
            icon: Icons.Clock, 
            color: 'bg-cyan-500',
            textColor: 'text-cyan-600 dark:text-cyan-400',
            bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
            onClick: () => setCurrentPage('income')
        }
    ];

    // Recent income
    const recentIncome = [...income].reverse().slice(0, 5);

    return React.createElement('div', { className: 'animate-fade-in' },
        // Header
        React.createElement('div', { className: 'mb-8' },
            React.createElement('h2', { className: 'text-3xl font-bold text-gray-800 dark:text-white mb-2' }, t(currentLang, 'dashboardTitle')),
            React.createElement('p', { className: 'text-gray-500 dark:text-gray-400' }, t(currentLang, 'dashboardSubtitle'))
        ),
        
        // Stats Grid
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8' },
            stats.map((stat, index) => 
                React.createElement('div', { 
                    key: index,
                    onClick: stat.onClick,
                    className: `stat-card rounded-2xl p-6 shadow-sm card-hover cursor-pointer border border-gray-100 dark:border-slate-700 animate-slide-up`,
                    style: { animationDelay: `${index * 0.1}s` }
                },
                    React.createElement('div', { className: 'flex items-start justify-between' },
                        React.createElement('div', {},
                            React.createElement('p', { className: 'text-gray-500 dark:text-gray-400 text-sm mb-1' }, stat.title),
                            React.createElement('p', { className: `text-2xl font-bold ${stat.textColor}` }, 
                                stat.animated 
                                    ? React.createElement(AnimatedNumber, { value: stat.value })
                                    : stat.value, 
                                ' ', stat.symbol
                            )
                        ),
                        React.createElement('div', { className: `${stat.bgColor} p-3 rounded-xl animate-float` },
                            React.createElement(stat.icon, { className: stat.textColor })
                        )
                    )
                )
            )
        ),
        
        // Financial Summary Section
        React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8' },
            // Summary Chart
            React.createElement('div', { className: 'bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700' },
                React.createElement('h3', { className: 'text-lg font-bold text-gray-800 dark:text-white mb-6' }, t(currentLang, 'financialSummary')),
                React.createElement('div', { className: 'space-y-4' },
                    React.createElement('div', {},
                        React.createElement('div', { className: 'flex justify-between mb-2' },
                            React.createElement('span', { className: 'text-gray-600' }, t(currentLang, 'income')),
                            React.createElement('span', { className: 'font-semibold text-emerald-600' }, 
                                totalIncome.toLocaleString('en-US'), ' ', currencySymbol
                            )
                        ),
                        React.createElement('div', { className: 'w-full bg-gray-200 rounded-full h-3' },
                            React.createElement('div', { 
                                className: 'bg-emerald-500 h-3 rounded-full transition-all duration-500',
                                style: { width: `${Math.min((totalIncome / (totalIncome || 1)) * 100, 100)}%` }
                            })
                        )
                    ),
                    settings.commissionRate > 0 && React.createElement('div', {},
                        React.createElement('div', { className: 'flex justify-between mb-2' },
                            React.createElement('span', { className: 'text-gray-600' }, `${t(currentLang, 'commission')} (${settings.commissionRate}%)`),
                            React.createElement('span', { className: 'font-semibold text-yellow-600' }, 
                                commissionAmount.toLocaleString('en-US'), ' ', currencySymbol
                            )
                        ),
                        React.createElement('div', { className: 'w-full bg-gray-200 rounded-full h-3' },
                            React.createElement('div', { 
                                className: 'bg-yellow-500 h-3 rounded-full transition-all duration-500',
                                style: { width: `${Math.min((commissionAmount / (totalIncome || 1)) * 100, 100)}%` }
                            })
                        )
                    ),
                    React.createElement('div', {},
                        React.createElement('div', { className: 'flex justify-between mb-2' },
                            React.createElement('span', { className: 'text-gray-600' }, t(currentLang, 'totalExpenses')),
                            React.createElement('span', { className: 'font-semibold text-red-600' }, 
                                totalExpenses.toLocaleString('en-US'), ' ', currencySymbol
                            )
                        ),
                        React.createElement('div', { className: 'w-full bg-gray-200 rounded-full h-3' },
                            React.createElement('div', { 
                                className: 'bg-red-500 h-3 rounded-full transition-all duration-500',
                                style: { width: `${Math.min((totalExpenses / (totalIncome || 1)) * 100, 100)}%` }
                            })
                        )
                    ),
                    React.createElement('div', { className: 'pt-4 border-t' },
                        React.createElement('div', { className: 'flex justify-between' },
                            React.createElement('span', { className: 'font-bold text-gray-800' }, t(currentLang, 'net')),
                            React.createElement('span', { className: `font-bold ${netIncome >= 0 ? 'text-blue-600' : 'text-red-600'}` }, 
                                netIncome.toLocaleString('en-US'), ' ', currencySymbol
                            )
                        )
                    )
                )
            ),

            // Recent Income
            React.createElement('div', { className: 'bg-white rounded-2xl p-6 shadow-sm border border-gray-100' },
                React.createElement('div', { className: 'flex justify-between items-center mb-6' },
                    React.createElement('h3', { className: 'text-lg font-bold text-gray-800' }, t(currentLang, 'recentIncome')),
                    React.createElement('button', { 
                        onClick: () => setCurrentPage('income'),
                        className: 'text-secondary-600 text-sm font-medium hover:underline' 
                    }, t(currentLang, 'viewAll'))
                ),
                recentIncome.length > 0 
                    ? React.createElement('div', { className: 'space-y-3' },
                        recentIncome.map((item, index) => 
                            React.createElement('div', { 
                                key: index,
                                className: 'flex items-center justify-between p-3 bg-gray-50 rounded-xl'
                            },
                                React.createElement('div', { className: 'flex items-center gap-3' },
                                    React.createElement('div', { className: 'w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center' },
                                        React.createElement(Icons.Income, { className: 'text-emerald-600' })
                                    ),
                                    React.createElement('div', {},
                                        React.createElement('p', { className: 'font-medium text-gray-800' }, item.source),
                                        React.createElement('p', { className: 'text-xs text-gray-500' }, item.date)
                                    )
                                ),
                                React.createElement('p', { className: 'font-bold text-emerald-600' }, 
                                    parseFloat(item.amount).toLocaleString('en-US'), ' ', currencySymbol
                                )
                            )
                        )
                    )
                    : React.createElement('div', { className: 'text-center py-8 text-gray-400' },
                        React.createElement(Icons.Income),
                        React.createElement('p', { className: 'mt-2' }, t(currentLang, 'noIncomeYet'))
                    )
            )
        )
    );
}

// Helper function to format numbers
function formatNumber(num) {
    return parseFloat(num || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Income Page Component
function IncomePage({ income, setIncome, currencySymbol, settings, currentLang, t }) {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        amount: '',
        source: '',
        description: '',
        hours: '',
        orders: '',
        cancelledOrders: '',
        date: new Date().toISOString().split('T')[0]
    });
    const [editingId, setEditingId] = useState(null);
    
    // Advanced Search States
    const [searchQuery, setSearchQuery] = useState('');
    const [searchFilters, setSearchFilters] = useState({
        dateFrom: '',
        dateTo: '',
        amountMin: '',
        amountMax: '',
        source: ''
    });
    const [showFilters, setShowFilters] = useState(false);
    
    const locale = currentLang === 'ar' ? 'ar-SA' : 'en-US';
    
    // Filter income based on search criteria
    const filteredIncome = useMemo(() => {
        return income.filter(item => {
            // Text search (source, description, amount)
            const searchLower = searchQuery.toLowerCase();
            const matchesSearch = !searchQuery || 
                item.source?.toLowerCase().includes(searchLower) ||
                item.description?.toLowerCase().includes(searchLower) ||
                item.amount?.toString().includes(searchLower) ||
                item.date?.includes(searchLower);
            
            // Date range filter
            const matchesDateFrom = !searchFilters.dateFrom || item.date >= searchFilters.dateFrom;
            const matchesDateTo = !searchFilters.dateTo || item.date <= searchFilters.dateTo;
            
            // Amount range filter
            const itemAmount = parseFloat(item.amount || 0);
            const matchesAmountMin = !searchFilters.amountMin || itemAmount >= parseFloat(searchFilters.amountMin);
            const matchesAmountMax = !searchFilters.amountMax || itemAmount <= parseFloat(searchFilters.amountMax);
            
            // Source filter
            const matchesSource = !searchFilters.source || 
                item.source?.toLowerCase().includes(searchFilters.source.toLowerCase());
            
            return matchesSearch && matchesDateFrom && matchesDateTo && 
                   matchesAmountMin && matchesAmountMax && matchesSource;
        });
    }, [income, searchQuery, searchFilters]);
    
    const clearFilters = () => {
        setSearchQuery('');
        setSearchFilters({
            dateFrom: '',
            dateTo: '',
            amountMin: '',
            amountMax: '',
            source: ''
        });
    };
    
    const hasActiveFilters = searchQuery || 
        Object.values(searchFilters).some(v => v !== '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            setIncome(income.map(item => item.id === editingId ? { ...formData, id: editingId } : item));
            setEditingId(null);
        } else {
            setIncome([...income, { ...formData, id: Date.now() }]);
        }
        setFormData({ amount: '', source: '', description: '', hours: '', orders: '', cancelledOrders: '', date: new Date().toISOString().split('T')[0] });
        setShowForm(false);
    };

    const handleEdit = (item) => {
        setFormData(item);
        setEditingId(item.id);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        if (confirm(currentLang === 'ar' ? 'هل أنت متأكد من الحذف؟' : 'Are you sure you want to delete?')) {
            setIncome(income.filter(item => item.id !== id));
        }
    };

    // Calculate totals from filtered results
    const totalIncome = filteredIncome.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);
    const totalHours = filteredIncome.reduce((sum, item) => sum + parseFloat(item.hours || 0), 0);
    const totalOrders = filteredIncome.reduce((sum, item) => sum + parseFloat(item.orders || 0), 0);
    const totalCancelledOrders = filteredIncome.reduce((sum, item) => sum + parseFloat(item.cancelledOrders || 0), 0);
    const commissionAmount = totalIncome * (settings.commissionRate / 100);
    const netIncome = totalIncome - commissionAmount;

    return React.createElement('div', { className: 'animate-fade-in' },
        // Header
        React.createElement('div', { className: 'mb-8' },
            React.createElement('h2', { className: 'text-3xl font-bold text-gray-800 mb-2' }, t(currentLang, 'incomeTitle')),
            React.createElement('p', { className: 'text-gray-500' }, t(currentLang, 'incomeSubtitle'))
        ),

        // Summary Cards
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-4 gap-6 mb-8' },
            React.createElement('div', { className: 'bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white' },
                React.createElement('p', { className: 'text-emerald-100 mb-1' }, t(currentLang, 'totalIncome')),
                React.createElement('p', { className: 'text-2xl font-bold' }, totalIncome.toLocaleString('en-US'), ' ', currencySymbol)
            ),
            settings.commissionRate > 0 && React.createElement('div', { className: 'bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 text-white' },
                React.createElement('p', { className: 'text-yellow-100 mb-1' }, `${t(currentLang, 'commissionRate')} (${settings.commissionRate}%)`),
                React.createElement('p', { className: 'text-2xl font-bold' }, commissionAmount.toLocaleString('en-US'), ' ', currencySymbol)
            ),
            React.createElement('div', { className: 'bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white' },
                React.createElement('p', { className: 'text-blue-100 mb-1' }, t(currentLang, 'netIncome')),
                React.createElement('p', { className: 'text-2xl font-bold' }, netIncome.toLocaleString('en-US'), ' ', currencySymbol)
            ),
            React.createElement('div', { className: 'bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white' },
                React.createElement('p', { className: 'text-purple-100 mb-1' }, t(currentLang, 'totalHours')),
                React.createElement('p', { className: 'text-2xl font-bold' }, totalHours.toLocaleString('en-US'), ' ', t(currentLang, 'hours'))
            ),
            React.createElement('div', { className: 'bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white' },
                React.createElement('p', { className: 'text-orange-100 mb-1' }, t(currentLang, 'totalOrdersLabel')),
                React.createElement('p', { className: 'text-2xl font-bold' }, totalOrders.toLocaleString('en-US'))
            ),
            React.createElement('div', { className: 'bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white' },
                React.createElement('p', { className: 'text-red-100 mb-1' }, t(currentLang, 'cancelledOrdersLabel')),
                React.createElement('p', { className: 'text-2xl font-bold' }, totalCancelledOrders.toLocaleString('en-US'))
            )
        ),

        // Advanced Search Section
        React.createElement('div', { className: 'search-container dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900' },
            // Search Box
            React.createElement('div', { className: 'search-box' },
                React.createElement('span', { className: 'search-icon' }, '🔍'),
                React.createElement('input', {
                    type: 'text',
                    value: searchQuery,
                    onChange: (e) => setSearchQuery(e.target.value),
                    className: 'search-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                    placeholder: t(currentLang, 'searchPlaceholder') || 'Search by source, description, amount or date...'
                })
            ),
            // Toggle Filters Button
            React.createElement('button', {
                onClick: () => setShowFilters(!showFilters),
                className: 'search-btn secondary dark:bg-slate-700 dark:text-slate-300 mb-2'
            }, 
                showFilters ? '🔼 ' + (t(currentLang, 'hideFilters') || 'Hide Filters') : '🔽 ' + (t(currentLang, 'showFilters') || 'Show Filters')
            ),
            // Expandable Filters
            React.createElement('div', { className: `search-filters ${showFilters ? 'expanded' : ''}` },
                // Date Range
                React.createElement('div', { className: 'filter-group' },
                    React.createElement('label', { className: 'filter-label dark:text-slate-400' }, t(currentLang, 'dateFrom') || 'From Date'),
                    React.createElement('input', {
                        type: 'date',
                        value: searchFilters.dateFrom,
                        onChange: (e) => setSearchFilters({...searchFilters, dateFrom: e.target.value}),
                        className: 'filter-input dark:bg-slate-700 dark:border-slate-600 dark:text-white'
                    })
                ),
                React.createElement('div', { className: 'filter-group' },
                    React.createElement('label', { className: 'filter-label dark:text-slate-400' }, t(currentLang, 'dateTo') || 'To Date'),
                    React.createElement('input', {
                        type: 'date',
                        value: searchFilters.dateTo,
                        onChange: (e) => setSearchFilters({...searchFilters, dateTo: e.target.value}),
                        className: 'filter-input dark:bg-slate-700 dark:border-slate-600 dark:text-white'
                    })
                ),
                // Amount Range
                React.createElement('div', { className: 'filter-group' },
                    React.createElement('label', { className: 'filter-label dark:text-slate-400' }, t(currentLang, 'amountMin') || 'Min Amount'),
                    React.createElement('input', {
                        type: 'number',
                        value: searchFilters.amountMin,
                        onChange: (e) => setSearchFilters({...searchFilters, amountMin: e.target.value}),
                        className: 'filter-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                        placeholder: '0'
                    })
                ),
                React.createElement('div', { className: 'filter-group' },
                    React.createElement('label', { className: 'filter-label dark:text-slate-400' }, t(currentLang, 'amountMax') || 'Max Amount'),
                    React.createElement('input', {
                        type: 'number',
                        value: searchFilters.amountMax,
                        onChange: (e) => setSearchFilters({...searchFilters, amountMax: e.target.value}),
                        className: 'filter-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                        placeholder: '∞'
                    })
                ),
                // Source Filter
                React.createElement('div', { className: 'filter-group' },
                    React.createElement('label', { className: 'filter-label dark:text-slate-400' }, t(currentLang, 'filterSource') || 'Source'),
                    React.createElement('input', {
                        type: 'text',
                        value: searchFilters.source,
                        onChange: (e) => setSearchFilters({...searchFilters, source: e.target.value}),
                        className: 'filter-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                        placeholder: t(currentLang, 'placeholderSource') || 'Filter by source...'
                    })
                )
            ),
            // Search Actions
            hasActiveFilters && React.createElement('div', { className: 'search-actions dark:border-slate-700' },
                React.createElement('span', { className: 'search-results-count dark:text-slate-400' },
                    t(currentLang, 'showing') || 'Showing', ' ',
                    React.createElement('span', { className: 'highlight' }, filteredIncome.length),
                    ' ', t(currentLang, 'of') || 'of', ' ', income.length, ' ',
                    t(currentLang, 'records') || 'records'
                ),
                React.createElement('button', {
                    onClick: clearFilters,
                    className: 'search-btn secondary dark:bg-slate-700 dark:text-slate-300'
                }, 
                    '🔄 ' + (t(currentLang, 'clearFilters') || 'Clear Filters')
                )
            )
        ),

        // Professional Modal Form
        showForm && React.createElement(React.Fragment, {},
            // Modal Overlay
            React.createElement('div', { 
                className: `modal-overlay ${showForm ? 'active' : ''}`
            }),
            // Modal Container
            React.createElement('div', { className: `modal-container ${showForm ? 'active' : ''}` },
                React.createElement('div', { className: 'modal-form-container' },
                    // Modal Header
                    React.createElement('div', { className: 'relative bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-6' },
                        React.createElement('h3', { className: 'text-2xl font-bold text-white' }, 
                            editingId ? t(currentLang, 'editIncome') : t(currentLang, 'addIncome')
                        ),
                        React.createElement('p', { className: 'text-violet-100 mt-1 text-sm' },
                            editingId ? t(currentLang, 'editIncomeDesc') || 'Update income record details' : t(currentLang, 'addIncomeDesc') || 'Fill in the details to add new income'
                        ),
                        // Close Button
                        React.createElement('button', {
                            onClick: () => { setShowForm(false); setEditingId(null); },
                            className: 'modal-close'
                        }, '✕')
                    ),
                    // Modal Body
                    React.createElement('form', { onSubmit: handleSubmit, className: 'p-8 max-h-[70vh] overflow-y-auto' },
                        // Basic Info Section
                        React.createElement('div', { className: 'form-section mb-6' },
                            React.createElement('div', { className: 'section-header' },
                                React.createElement('div', { className: 'section-icon' }, '💰'),
                                React.createElement('span', { className: 'section-title dark:text-white' }, t(currentLang, 'basicInfo') || 'Basic Information')
                            ),
                            React.createElement('div', { className: 'form-grid-2' },
                                // Amount Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'amount')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, currencySymbol),
                                        React.createElement('input', {
                                            type: 'number',
                                            value: formData.amount,
                                            onChange: (e) => setFormData({...formData, amount: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                                            placeholder: '0.00',
                                            required: true
                                        })
                                    )
                                ),
                                // Source Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'source')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, '🏢'),
                                        React.createElement('input', {
                                            type: 'text',
                                            value: formData.source,
                                            onChange: (e) => setFormData({...formData, source: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                                            placeholder: t(currentLang, 'placeholderSource') || 'e.g. Salary, Freelance',
                                            required: true
                                        })
                                    )
                                ),
                                // Date Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'date')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, '📅'),
                                        React.createElement('input', {
                                            type: 'date',
                                            value: formData.date,
                                            onChange: (e) => setFormData({...formData, date: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                                            required: true
                                        })
                                    )
                                )
                            )
                        ),
                        
                        // Work Details Section
                        React.createElement('div', { className: 'form-section mb-6' },
                            React.createElement('div', { className: 'section-header' },
                                React.createElement('div', { className: 'section-icon' }, '⏱️'),
                                React.createElement('span', { className: 'section-title dark:text-white' }, t(currentLang, 'workDetails') || 'Work Details')
                            ),
                            React.createElement('div', { className: 'form-grid-2' },
                                // Hours Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'hoursLabel')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, '⏰'),
                                        React.createElement('input', {
                                            type: 'number',
                                            value: formData.hours,
                                            onChange: (e) => setFormData({...formData, hours: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                                            placeholder: '0',
                                            step: '0.5'
                                        })
                                    )
                                ),
                                // Completed Orders Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'ordersLabel')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, '✅'),
                                        React.createElement('input', {
                                            type: 'number',
                                            value: formData.orders,
                                            onChange: (e) => setFormData({...formData, orders: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                                            placeholder: '0',
                                            min: '0'
                                        })
                                    )
                                ),
                                // Cancelled Orders Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'cancelledOrdersLabel')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, '❌'),
                                        React.createElement('input', {
                                            type: 'number',
                                            value: formData.cancelledOrders,
                                            onChange: (e) => setFormData({...formData, cancelledOrders: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                                            placeholder: '0',
                                            min: '0'
                                        })
                                    )
                                )
                            )
                        ),
                        
                        // Description Section
                        React.createElement('div', { className: 'form-section mb-6' },
                            React.createElement('div', { className: 'section-header' },
                                React.createElement('div', { className: 'section-icon' }, '📝'),
                                React.createElement('span', { className: 'section-title dark:text-white' }, t(currentLang, 'description') || 'Description')
                            ),
                            React.createElement('div', { className: 'input-group' },
                                React.createElement('textarea', {
                                    value: formData.description,
                                    onChange: (e) => setFormData({...formData, description: e.target.value}),
                                    className: 'w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-violet-500 focus:outline-none transition-all min-h-[100px] resize-none',
                                    placeholder: t(currentLang, 'placeholderDescription') || 'Add any additional notes...',
                                    rows: 3
                                })
                            )
                        ),
                        
                        // Action Buttons
                        React.createElement('div', { className: 'flex gap-3 pt-4' },
                            React.createElement('button', {
                                type: 'button',
                                onClick: () => { setShowForm(false); setEditingId(null); },
                                className: 'flex-1 px-6 py-3 rounded-xl font-medium border-2 border-gray-200 dark:border-slate-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all'
                            }, t(currentLang, 'cancel')),
                            React.createElement('button', {
                                type: 'submit',
                                className: 'flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all'
                            }, editingId ? t(currentLang, 'update') : t(currentLang, 'save'))
                        )
                    )
                )
            )
        ),

        // Floating Action Button
        !showForm && React.createElement('button', {
            onClick: () => setShowForm(true),
            className: 'fab',
            title: t(currentLang, 'addIncome')
        }, React.createElement(Icons.Plus, { className: 'w-6 h-6' })),

        // Income List - Professional Cards
        React.createElement('div', { className: 'mt-8' },
            React.createElement('h3', { className: 'text-xl font-bold text-gray-800 mb-6 dark:text-white' }, t(currentLang, 'incomeRecords')),
            filteredIncome.length === 0 
                ? React.createElement('div', { className: 'empty-state dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900' },
                    React.createElement('div', { className: 'empty-state-icon dark:bg-violet-900/20 dark:text-violet-400' }, '💰'),
                    React.createElement('p', { className: 'text-gray-500 dark:text-gray-400' }, 
                        hasActiveFilters ? t(currentLang, 'noSearchResults') || 'No matching records found' : t(currentLang, 'noIncomeRecords')
                    )
                )
                : React.createElement('div', { className: 'income-list' },
                    filteredIncome.slice().reverse().map(item => {
                        const commissionAmount = parseFloat(item.amount || 0) * (settings.commissionRate / 100);
                        const netAmount = parseFloat(item.amount || 0) - commissionAmount;
                        return React.createElement('div', { 
                            key: item.id,
                            className: 'income-card detailed dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900'
                        },
                            React.createElement('div', { className: 'income-card-header' },
                                React.createElement('div', { className: 'flex-1' },
                                    // Top Row: Amount & Source
                                    React.createElement('div', { className: 'flex items-center gap-3 mb-3 flex-wrap' },
                                        React.createElement('span', { className: 'amount-badge' },
                                            formatNumber(item.amount), ' ', currencySymbol
                                        ),
                                        React.createElement('span', { className: 'source-label dark:bg-violet-900/30 dark:text-violet-300' }, item.source),
                                        React.createElement('span', { className: 'date-badge dark:bg-slate-700 dark:text-slate-300' }, 
                                            React.createElement(Icons.Calendar, { className: 'w-3 h-3 inline ml-1' }),
                                            ' ', item.date,
                                            ' - ',
                                            React.createElement('span', { className: 'en-font' }, getEnglishDayName(item.date))
                                        )
                                    ),
                                    // Description
                                    item.description && React.createElement('p', { className: 'text-gray-600 text-sm dark:text-gray-400 mb-3' }, item.description)
                                ),
                                React.createElement('div', { className: 'flex gap-2' },
                                    React.createElement('button', {
                                        onClick: () => handleEdit(item),
                                        className: 'p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors'
                                    }, React.createElement(Icons.Edit)),
                                    React.createElement('button', {
                                        onClick: () => handleDelete(item.id),
                                        className: 'p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors'
                                    }, React.createElement(Icons.Trash))
                                )
                            ),
                            // Details Grid
                            React.createElement('div', { className: 'income-details-grid' },
                                item.hours && React.createElement('div', { className: 'income-detail-item' },
                                    React.createElement('span', { className: 'income-detail-icon' }, '⏱️'),
                                    React.createElement('div', {},
                                        React.createElement('span', { className: 'income-detail-label' }, t(currentLang, 'hours') || 'Hours'),
                                        React.createElement('span', { className: 'income-detail-value' }, item.hours)
                                    )
                                ),
                                item.orders && React.createElement('div', { className: 'income-detail-item' },
                                    React.createElement('span', { className: 'income-detail-icon' }, '📦'),
                                    React.createElement('div', {},
                                        React.createElement('span', { className: 'income-detail-label' }, t(currentLang, 'orders') || 'Orders'),
                                        React.createElement('span', { className: 'income-detail-value' }, item.orders)
                                    )
                                ),
                                item.cancelledOrders && React.createElement('div', { className: 'income-detail-item cancelled' },
                                    React.createElement('span', { className: 'income-detail-icon' }, '❌'),
                                    React.createElement('div', {},
                                        React.createElement('span', { className: 'income-detail-label' }, t(currentLang, 'cancelledOrders') || 'Cancelled'),
                                        React.createElement('span', { className: 'income-detail-value' }, item.cancelledOrders)
                                    )
                                ),
                                React.createElement('div', { className: 'income-detail-item commission' },
                                    React.createElement('span', { className: 'income-detail-icon' }, '📊'),
                                    React.createElement('div', {},
                                        React.createElement('span', { className: 'income-detail-label' }, t(currentLang, 'commission') || 'Commission'),
                                        React.createElement('span', { className: 'income-detail-value' }, formatNumber(commissionAmount), ' ', currencySymbol)
                                    )
                                ),
                                React.createElement('div', { className: 'income-detail-item net' },
                                    React.createElement('span', { className: 'income-detail-icon' }, '💵'),
                                    React.createElement('div', {},
                                        React.createElement('span', { className: 'income-detail-label' }, t(currentLang, 'netAmount') || 'Net Amount'),
                                        React.createElement('span', { className: 'income-detail-value net-value' }, formatNumber(netAmount), ' ', currencySymbol)
                                    )
                                )
                            )
                        );
                    })
                )
        )
    );
}

// Expenses Page Component
function ExpensesPage({ expenses, setExpenses, currencySymbol, currentLang, t }) {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        amount: '',
        category: '',
        description: '',
        date: new Date().toISOString().split('T')[0]
    });
    const [editingId, setEditingId] = useState(null);
    const locale = currentLang === 'ar' ? 'ar-SA' : 'en-US';

    const categoryKeys = ['food', 'transport', 'shopping', 'bills', 'health', 'entertainment', 'education', 'other'];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            setExpenses(expenses.map(item => item.id === editingId ? { ...formData, id: editingId } : item));
            setEditingId(null);
        } else {
            setExpenses([...expenses, { ...formData, id: Date.now() }]);
        }
        setFormData({ amount: '', category: '', description: '', date: new Date().toISOString().split('T')[0] });
        setShowForm(false);
    };

    const handleEdit = (item) => {
        setFormData(item);
        setEditingId(item.id);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        if (confirm(currentLang === 'ar' ? 'هل أنت متأكد من الحذف؟' : 'Are you sure you want to delete?')) {
            setExpenses(expenses.filter(item => item.id !== id));
        }
    };

    const totalExpenses = expenses.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);
    
    // Calculate by category
    const categoryTotals = expenses.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + parseFloat(item.amount || 0);
        return acc;
    }, {});

    return React.createElement('div', { className: 'animate-fade-in' },
        // Header
        React.createElement('div', { className: 'mb-8' },
            React.createElement('h2', { className: 'text-3xl font-bold text-gray-800 mb-2' }, t(currentLang, 'expensesTitle')),
            React.createElement('p', { className: 'text-gray-500' }, t(currentLang, 'expensesSubtitle'))
        ),

        // Summary Card
        React.createElement('div', { className: 'bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white mb-8' },
            React.createElement('p', { className: 'text-red-100 mb-1' }, t(currentLang, 'totalExpenses')),
            React.createElement('p', { className: 'text-3xl font-bold' }, totalExpenses.toLocaleString('en-US'), ' ', currencySymbol)
        ),

        // Category Breakdown
        Object.keys(categoryTotals).length > 0 && React.createElement('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-4 mb-8' },
            Object.entries(categoryTotals).map(([category, amount]) => 
                React.createElement('div', { key: category, className: 'bg-white rounded-xl p-4 shadow-sm border border-gray-100' },
                    React.createElement('p', { className: 'text-sm text-gray-500 mb-1' }, category),
                    React.createElement('p', { className: 'font-bold text-gray-800' }, amount.toLocaleString('en-US'), ' ', currencySymbol)
                )
            )
        ),

        // Professional Modal Form
        showForm && React.createElement(React.Fragment, {},
            // Modal Overlay
            React.createElement('div', { 
                className: `modal-overlay ${showForm ? 'active' : ''}`
            }),
            // Modal Container
            React.createElement('div', { className: `modal-container ${showForm ? 'active' : ''}` },
                React.createElement('div', { className: 'modal-form-container' },
                    // Modal Header
                    React.createElement('div', { className: 'relative bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-6' },
                        React.createElement('h3', { className: 'text-2xl font-bold text-white' }, 
                            editingId ? t(currentLang, 'editExpense') : t(currentLang, 'addExpense')
                        ),
                        React.createElement('p', { className: 'text-violet-100 mt-1 text-sm' },
                            editingId ? t(currentLang, 'editExpenseDesc') || 'Update expense record details' : t(currentLang, 'addExpenseDesc') || 'Fill in the details to add new expense'
                        ),
                        // Close Button
                        React.createElement('button', {
                            onClick: () => { setShowForm(false); setEditingId(null); },
                            className: 'modal-close'
                        }, '✕')
                    ),
                    // Modal Body
                    React.createElement('form', { onSubmit: handleSubmit, className: 'p-8 max-h-[70vh] overflow-y-auto' },
                        // Basic Info Section
                        React.createElement('div', { className: 'form-section mb-6' },
                            React.createElement('div', { className: 'section-header' },
                                React.createElement('div', { className: 'section-icon' }, '💰'),
                                React.createElement('span', { className: 'section-title dark:text-white' }, t(currentLang, 'basicInfo') || 'Basic Information')
                            ),
                            React.createElement('div', { className: 'form-grid-2' },
                                // Amount Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'amount')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, currencySymbol),
                                        React.createElement('input', {
                                            type: 'number',
                                            value: formData.amount,
                                            onChange: (e) => setFormData({...formData, amount: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                                            placeholder: '0.00',
                                            required: true
                                        })
                                    )
                                ),
                                // Category Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'category')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, '🏷️'),
                                        React.createElement('select', {
                                            value: formData.category,
                                            onChange: (e) => setFormData({...formData, category: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                                            required: true
                                        },
                                            React.createElement('option', { value: '' }, t(currentLang, 'selectCategory')),
                                            categoryKeys.map(key => React.createElement('option', { key, value: t(currentLang, `categories.${key}`) }, t(currentLang, `categories.${key}`)))
                                        )
                                    )
                                ),
                                // Date Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'date')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, '📅'),
                                        React.createElement('input', {
                                            type: 'date',
                                            value: formData.date,
                                            onChange: (e) => setFormData({...formData, date: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                                            required: true
                                        })
                                    )
                                )
                            )
                        ),
                        
                        // Description Section
                        React.createElement('div', { className: 'form-section mb-6' },
                            React.createElement('div', { className: 'section-header' },
                                React.createElement('div', { className: 'section-icon' }, '📝'),
                                React.createElement('span', { className: 'section-title dark:text-white' }, t(currentLang, 'description') || 'Description')
                            ),
                            React.createElement('div', { className: 'input-group' },
                                React.createElement('textarea', {
                                    value: formData.description,
                                    onChange: (e) => setFormData({...formData, description: e.target.value}),
                                    className: 'w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-violet-500 focus:outline-none transition-all min-h-[100px] resize-none',
                                    placeholder: t(currentLang, 'placeholderDescription') || 'Add any additional notes...',
                                    rows: 3
                                })
                            )
                        ),
                        
                        // Action Buttons
                        React.createElement('div', { className: 'flex gap-3 pt-4' },
                            React.createElement('button', {
                                type: 'button',
                                onClick: () => { setShowForm(false); setEditingId(null); },
                                className: 'flex-1 px-6 py-3 rounded-xl font-medium border-2 border-gray-200 dark:border-slate-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all'
                            }, t(currentLang, 'cancel')),
                            React.createElement('button', {
                                type: 'submit',
                                className: 'flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all'
                            }, editingId ? t(currentLang, 'update') : t(currentLang, 'save'))
                        )
                    )
                )
            )
        ),

        // Floating Action Button
        !showForm && React.createElement('button', {
            onClick: () => setShowForm(true),
            className: 'fab',
            title: t(currentLang, 'addExpense')
        }, React.createElement(Icons.Plus, { className: 'w-6 h-6' })),

        // Expenses List
        React.createElement('div', { className: 'bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden' },
            React.createElement('div', { className: 'p-6 border-b' },
                React.createElement('h3', { className: 'text-lg font-bold text-gray-800' }, t(currentLang, 'expenseRecords'))
            ),
            expenses.length > 0 
                ? React.createElement('div', { className: 'divide-y' },
                    [...expenses].reverse().map((item) => 
                        React.createElement('div', { 
                            key: item.id,
                            className: 'p-6 hover:bg-gray-50 transition-colors flex items-center justify-between'
                        },
                            React.createElement('div', { className: 'flex items-center gap-4' },
                                React.createElement('div', { className: 'w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center' },
                                    React.createElement(Icons.TrendingDown, { className: 'text-red-600' })
                                ),
                                React.createElement('div', {},
                                    React.createElement('p', { className: 'font-bold text-gray-800' }, item.category),
                                    React.createElement('div', { className: 'flex items-center gap-3 text-sm text-gray-500 mt-1' },
                                        React.createElement('span', { className: 'flex items-center gap-1' },
                                            React.createElement(Icons.Calendar),
                                            item.date
                                        )
                                    ),
                                    item.description && React.createElement('p', { className: 'text-sm text-gray-500 mt-2' }, item.description)
                                )
                            ),
                            React.createElement('div', { className: 'flex items-center gap-4' },
                                React.createElement('p', { className: 'text-xl font-bold text-red-600' }, 
                                    parseFloat(item.amount).toLocaleString('en-US'), ' ', currencySymbol
                                ),
                                React.createElement('div', { className: 'flex gap-2' },
                                    React.createElement('button', {
                                        onClick: () => handleEdit(item),
                                        className: 'p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors'
                                    }, React.createElement(Icons.Edit)),
                                    React.createElement('button', {
                                        onClick: () => handleDelete(item.id),
                                        className: 'p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors'
                                    }, React.createElement(Icons.Trash))
                                )
                            )
                        )
                    )
                )
                : React.createElement('div', { className: 'p-12 text-center text-gray-400' },
                    React.createElement(Icons.Expenses),
                    React.createElement('p', { className: 'mt-4' }, t(currentLang, 'noExpenseRecords'))
                )
        )
    );
}

// Tasks Page Component
function TasksPage({ tasks, setTasks, currentLang, t }) {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: 'medium',
        dueDate: '',
        completed: false
    });
    const [editingId, setEditingId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            setTasks(tasks.map(item => item.id === editingId ? { ...formData, id: editingId } : item));
            setEditingId(null);
        } else {
            setTasks([...tasks, { ...formData, id: Date.now() }]);
        }
        setFormData({ title: '', description: '', priority: 'medium', dueDate: '', completed: false });
        setShowForm(false);
    };

    const handleEdit = (item) => {
        setFormData(item);
        setEditingId(item.id);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        if (confirm(currentLang === 'ar' ? 'هل أنت متأكد من الحذف؟' : 'Are you sure you want to delete?')) {
            setTasks(tasks.filter(item => item.id !== id));
        }
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(item => 
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };

    const priorityColors = {
        high: 'bg-red-100 text-red-700',
        medium: 'bg-yellow-100 text-yellow-700',
        low: 'bg-green-100 text-green-700'
    };

    const completedCount = tasks.filter(t => t.completed).length;
    const pendingCount = tasks.filter(t => !t.completed).length;

    return React.createElement('div', { className: 'animate-fade-in' },
        // Header
        React.createElement('div', { className: 'mb-8' },
            React.createElement('h2', { className: 'text-3xl font-bold text-gray-800 mb-2' }, t(currentLang, 'tasksTitle')),
            React.createElement('p', { className: 'text-gray-500' }, t(currentLang, 'tasksSubtitle'))
        ),

        // Summary
        React.createElement('div', { className: 'grid grid-cols-2 gap-6 mb-8' },
            React.createElement('div', { className: 'bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white' },
                React.createElement('p', { className: 'text-emerald-100 mb-1' }, t(currentLang, 'completedTasks')),
                React.createElement('p', { className: 'text-3xl font-bold' }, completedCount)
            ),
            React.createElement('div', { className: 'bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white' },
                React.createElement('p', { className: 'text-orange-100 mb-1' }, t(currentLang, 'pendingTasksLabel')),
                React.createElement('p', { className: 'text-3xl font-bold' }, pendingCount)
            )
        ),

        // Professional Modal Form
        showForm && React.createElement(React.Fragment, {},
            // Modal Overlay
            React.createElement('div', { 
                className: `modal-overlay ${showForm ? 'active' : ''}`
            }),
            // Modal Container
            React.createElement('div', { className: `modal-container ${showForm ? 'active' : ''}` },
                React.createElement('div', { className: 'modal-form-container' },
                    // Modal Header
                    React.createElement('div', { className: 'relative bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-6' },
                        React.createElement('h3', { className: 'text-2xl font-bold text-white' }, 
                            editingId ? t(currentLang, 'editTask') : t(currentLang, 'addTask')
                        ),
                        React.createElement('p', { className: 'text-violet-100 mt-1 text-sm' },
                            editingId ? t(currentLang, 'editTaskDesc') || 'Update task details' : t(currentLang, 'addTaskDesc') || 'Fill in the details to add new task'
                        ),
                        // Close Button
                        React.createElement('button', {
                            onClick: () => { setShowForm(false); setEditingId(null); },
                            className: 'modal-close'
                        }, '✕')
                    ),
                    // Modal Body
                    React.createElement('form', { onSubmit: handleSubmit, className: 'p-8 max-h-[70vh] overflow-y-auto' },
                        // Basic Info Section
                        React.createElement('div', { className: 'form-section mb-6' },
                            React.createElement('div', { className: 'section-header' },
                                React.createElement('div', { className: 'section-icon' }, '📝'),
                                React.createElement('span', { className: 'section-title dark:text-white' }, t(currentLang, 'taskInfo') || 'Task Information')
                            ),
                            React.createElement('div', { className: 'form-grid-2' },
                                // Title Field
                                React.createElement('div', { className: 'input-group md:col-span-2' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'taskTitle')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, '📋'),
                                        React.createElement('input', {
                                            type: 'text',
                                            value: formData.title,
                                            onChange: (e) => setFormData({...formData, title: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                                            placeholder: t(currentLang, 'taskTitle'),
                                            required: true
                                        })
                                    )
                                ),
                                // Priority Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'priority')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, '🔥'),
                                        React.createElement('select', {
                                            value: formData.priority,
                                            onChange: (e) => setFormData({...formData, priority: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white'
                                        },
                                            React.createElement('option', { value: 'high' }, t(currentLang, 'priorities.high')),
                                            React.createElement('option', { value: 'medium' }, t(currentLang, 'priorities.medium')),
                                            React.createElement('option', { value: 'low' }, t(currentLang, 'priorities.low'))
                                        )
                                    )
                                ),
                                // Due Date Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'dueDate')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, '📅'),
                                        React.createElement('input', {
                                            type: 'date',
                                            value: formData.dueDate,
                                            onChange: (e) => setFormData({...formData, dueDate: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white'
                                        })
                                    )
                                )
                            )
                        ),
                        
                        // Description Section
                        React.createElement('div', { className: 'form-section mb-6' },
                            React.createElement('div', { className: 'section-header' },
                                React.createElement('div', { className: 'section-icon' }, '📄'),
                                React.createElement('span', { className: 'section-title dark:text-white' }, t(currentLang, 'description') || 'Description')
                            ),
                            React.createElement('div', { className: 'input-group' },
                                React.createElement('textarea', {
                                    value: formData.description,
                                    onChange: (e) => setFormData({...formData, description: e.target.value}),
                                    className: 'w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-violet-500 focus:outline-none transition-all min-h-[100px] resize-none',
                                    placeholder: t(currentLang, 'placeholderDescription') || 'Add task description...',
                                    rows: 3
                                })
                            )
                        ),
                        
                        // Action Buttons
                        React.createElement('div', { className: 'flex gap-3 pt-4' },
                            React.createElement('button', {
                                type: 'button',
                                onClick: () => { setShowForm(false); setEditingId(null); },
                                className: 'flex-1 px-6 py-3 rounded-xl font-medium border-2 border-gray-200 dark:border-slate-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all'
                            }, t(currentLang, 'cancel')),
                            React.createElement('button', {
                                type: 'submit',
                                className: 'flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all'
                            }, editingId ? t(currentLang, 'update') : t(currentLang, 'save'))
                        )
                    )
                )
            )
        ),

        // Floating Action Button
        !showForm && React.createElement('button', {
            onClick: () => setShowForm(true),
            className: 'fab',
            title: t(currentLang, 'addTask')
        }, React.createElement(Icons.Plus, { className: 'w-6 h-6' })),

        // Tasks List
        React.createElement('div', { className: 'bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden' },
            React.createElement('div', { className: 'p-6 border-b' },
                React.createElement('h3', { className: 'text-lg font-bold text-gray-800' }, t(currentLang, 'taskRecords'))
            ),
            tasks.length > 0 
                ? React.createElement('div', { className: 'divide-y' },
                    [...tasks].reverse().map((item) => 
                        React.createElement('div', { 
                            key: item.id,
                            className: `p-6 hover:bg-gray-50 transition-colors flex items-center justify-between ${item.completed ? 'opacity-60' : ''}`
                        },
                            React.createElement('div', { className: 'flex items-center gap-4' },
                                React.createElement('button', {
                                    onClick: () => toggleComplete(item.id),
                                    className: `w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                        item.completed 
                                            ? 'bg-emerald-500 border-emerald-500 text-white' 
                                            : 'border-gray-300 hover:border-emerald-500'
                                    }`
                                }, item.completed && React.createElement(Icons.Check)),
                                React.createElement('div', {},
                                    React.createElement('p', { className: `font-bold ${item.completed ? 'line-through text-gray-400' : 'text-gray-800'}` }, item.title),
                                    React.createElement('div', { className: 'flex items-center gap-3 mt-2' },
                                        React.createElement('span', { className: `px-3 py-1 rounded-full text-xs font-medium ${priorityColors[item.priority]}` }, 
                                            t(currentLang, `priorities.${item.priority}`)
                                        ),
                                        item.dueDate && React.createElement('span', { className: 'text-sm text-gray-500 flex items-center gap-1' },
                                            React.createElement(Icons.Calendar),
                                            item.dueDate
                                        )
                                    ),
                                    item.description && React.createElement('p', { className: 'text-sm text-gray-500 mt-2' }, item.description)
                                )
                            ),
                            React.createElement('div', { className: 'flex gap-2' },
                                React.createElement('button', {
                                    onClick: () => handleEdit(item),
                                    className: 'p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors'
                                }, React.createElement(Icons.Edit)),
                                React.createElement('button', {
                                    onClick: () => handleDelete(item.id),
                                    className: 'p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors'
                                }, React.createElement(Icons.Trash))
                            )
                        )
                    )
                )
                : React.createElement('div', { className: 'p-12 text-center text-gray-400' },
                    React.createElement(Icons.Tasks),
                    React.createElement('p', { className: 'mt-4' }, t(currentLang, 'noTaskRecords'))
                )
        )
    );
}

// Debts Page Component
function DebtsPage({ debts, setDebts, currencySymbol, currentLang, t }) {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        personName: '',
        amount: '',
        type: 'owed',
        description: '',
        date: new Date().toISOString().split('T')[0],
        settled: false
    });
    const [editingId, setEditingId] = useState(null);
    const locale = currentLang === 'ar' ? 'ar-SA' : 'en-US';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            setDebts(debts.map(item => item.id === editingId ? { ...formData, id: editingId } : item));
            setEditingId(null);
        } else {
            setDebts([...debts, { ...formData, id: Date.now() }]);
        }
        setFormData({ personName: '', amount: '', type: 'owed', description: '', date: new Date().toISOString().split('T')[0], settled: false });
        setShowForm(false);
    };

    const handleEdit = (item) => {
        setFormData(item);
        setEditingId(item.id);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        if (confirm(currentLang === 'ar' ? 'هل أنت متأكد من الحذف؟' : 'Are you sure you want to delete?')) {
            setDebts(debts.filter(item => item.id !== id));
        }
    };

    const toggleSettled = (id) => {
        setDebts(debts.map(item => 
            item.id === id ? { ...item, settled: !item.settled } : item
        ));
    };

    const totalOwed = debts.filter(d => d.type === 'owed' && !d.settled).reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);
    const totalOwedToMe = debts.filter(d => d.type === 'owedToMe' && !d.settled).reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);

    return React.createElement('div', { className: 'animate-fade-in' },
        // Header
        React.createElement('div', { className: 'mb-8' },
            React.createElement('h2', { className: 'text-3xl font-bold text-gray-800 mb-2' }, t(currentLang, 'debtsTitle')),
            React.createElement('p', { className: 'text-gray-500' }, t(currentLang, 'debtsSubtitle'))
        ),

        // Summary Cards
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-8' },
            React.createElement('div', { className: 'bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white' },
                React.createElement('p', { className: 'text-red-100 mb-1' }, t(currentLang, 'myDebts')),
                React.createElement('p', { className: 'text-2xl font-bold' }, totalOwed.toLocaleString('en-US'), ' ', currencySymbol)
            ),
            React.createElement('div', { className: 'bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white' },
                React.createElement('p', { className: 'text-emerald-100 mb-1' }, t(currentLang, 'debtsToMe')),
                React.createElement('p', { className: 'text-2xl font-bold' }, totalOwedToMe.toLocaleString('en-US'), ' ', currencySymbol)
            )
        ),

        // Professional Modal Form
        showForm && React.createElement(React.Fragment, {},
            // Modal Overlay
            React.createElement('div', { 
                className: `modal-overlay ${showForm ? 'active' : ''}`
            }),
            // Modal Container
            React.createElement('div', { className: `modal-container ${showForm ? 'active' : ''}` },
                React.createElement('div', { className: 'modal-form-container' },
                    // Modal Header
                    React.createElement('div', { className: 'relative bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-6' },
                        React.createElement('h3', { className: 'text-2xl font-bold text-white' }, 
                            editingId ? t(currentLang, 'editDebt') : t(currentLang, 'addDebt')
                        ),
                        React.createElement('p', { className: 'text-violet-100 mt-1 text-sm' },
                            editingId ? t(currentLang, 'editDebtDesc') || 'Update debt record details' : t(currentLang, 'addDebtDesc') || 'Fill in the details to add new debt'
                        ),
                        // Close Button
                        React.createElement('button', {
                            onClick: () => { setShowForm(false); setEditingId(null); },
                            className: 'modal-close'
                        }, '✕')
                    ),
                    // Modal Body
                    React.createElement('form', { onSubmit: handleSubmit, className: 'p-8 max-h-[70vh] overflow-y-auto' },
                        // Basic Info Section
                        React.createElement('div', { className: 'form-section mb-6' },
                            React.createElement('div', { className: 'section-header' },
                                React.createElement('div', { className: 'section-icon' }, '👤'),
                                React.createElement('span', { className: 'section-title dark:text-white' }, t(currentLang, 'debtInfo') || 'Debt Information')
                            ),
                            React.createElement('div', { className: 'form-grid-2' },
                                // Person Name Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'personName')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, '👤'),
                                        React.createElement('input', {
                                            type: 'text',
                                            value: formData.personName,
                                            onChange: (e) => setFormData({...formData, personName: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                                            placeholder: t(currentLang, 'personName'),
                                            required: true
                                        })
                                    )
                                ),
                                // Amount Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'amount')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, currencySymbol),
                                        React.createElement('input', {
                                            type: 'number',
                                            value: formData.amount,
                                            onChange: (e) => setFormData({...formData, amount: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                                            placeholder: '0.00',
                                            required: true
                                        })
                                    )
                                ),
                                // Debt Type Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'debtType')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, '📊'),
                                        React.createElement('select', {
                                            value: formData.type,
                                            onChange: (e) => setFormData({...formData, type: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white'
                                        },
                                            React.createElement('option', { value: 'owed' }, t(currentLang, 'debtOwed')),
                                            React.createElement('option', { value: 'owedToMe' }, t(currentLang, 'debtOwedToMe'))
                                        )
                                    )
                                ),
                                // Date Field
                                React.createElement('div', { className: 'input-group' },
                                    React.createElement('label', { className: 'input-label' }, t(currentLang, 'date')),
                                    React.createElement('div', { className: 'relative' },
                                        React.createElement('span', { className: 'input-icon' }, '📅'),
                                        React.createElement('input', {
                                            type: 'date',
                                            value: formData.date,
                                            onChange: (e) => setFormData({...formData, date: e.target.value}),
                                            className: 'professional-input dark:bg-slate-700 dark:border-slate-600 dark:text-white',
                                            required: true
                                        })
                                    )
                                )
                            )
                        ),
                        
                        // Description Section
                        React.createElement('div', { className: 'form-section mb-6' },
                            React.createElement('div', { className: 'section-header' },
                                React.createElement('div', { className: 'section-icon' }, '📝'),
                                React.createElement('span', { className: 'section-title dark:text-white' }, t(currentLang, 'description') || 'Description')
                            ),
                            React.createElement('div', { className: 'input-group' },
                                React.createElement('textarea', {
                                    value: formData.description,
                                    onChange: (e) => setFormData({...formData, description: e.target.value}),
                                    className: 'w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-violet-500 focus:outline-none transition-all min-h-[100px] resize-none',
                                    placeholder: t(currentLang, 'placeholderDescription') || 'Add any additional notes...',
                                    rows: 3
                                })
                            )
                        ),
                        
                        // Action Buttons
                        React.createElement('div', { className: 'flex gap-3 pt-4' },
                            React.createElement('button', {
                                type: 'button',
                                onClick: () => { setShowForm(false); setEditingId(null); },
                                className: 'flex-1 px-6 py-3 rounded-xl font-medium border-2 border-gray-200 dark:border-slate-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all'
                            }, t(currentLang, 'cancel')),
                            React.createElement('button', {
                                type: 'submit',
                                className: 'flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all'
                            }, editingId ? t(currentLang, 'update') : t(currentLang, 'save'))
                        )
                    )
                )
            )
        ),

        // Floating Action Button
        !showForm && React.createElement('button', {
            onClick: () => setShowForm(true),
            className: 'fab',
            title: t(currentLang, 'addDebt')
        }, React.createElement(Icons.Plus, { className: 'w-6 h-6' })),

        // Debts List
        React.createElement('div', { className: 'bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden' },
            React.createElement('div', { className: 'p-6 border-b' },
                React.createElement('h3', { className: 'text-lg font-bold text-gray-800' }, t(currentLang, 'debtRecords'))
            ),
            debts.length > 0 
                ? React.createElement('div', { className: 'divide-y' },
                    [...debts].reverse().map((item) => 
                        React.createElement('div', { 
                            key: item.id,
                            className: `p-6 hover:bg-gray-50 transition-colors flex items-center justify-between ${item.settled ? 'opacity-60' : ''}`
                        },
                            React.createElement('div', { className: 'flex items-center gap-4' },
                                React.createElement('button', {
                                    onClick: () => toggleSettled(item.id),
                                    className: `w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                        item.settled 
                                            ? 'bg-emerald-500 border-emerald-500 text-white' 
                                            : 'border-gray-300 hover:border-emerald-500'
                                    }`
                                }, item.settled && React.createElement(Icons.Check)),
                                React.createElement('div', {},
                                    React.createElement('p', { className: `font-bold ${item.settled ? 'line-through text-gray-400' : 'text-gray-800'}` }, item.personName),
                                    React.createElement('div', { className: 'flex items-center gap-3 mt-1' },
                                        React.createElement('span', { className: `px-3 py-1 rounded-full text-xs font-medium ${
                                            item.type === 'owed' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
                                        }` }, 
                                            item.type === 'owed' ? (currentLang === 'ar' ? 'عليّ' : 'I Owe') : (currentLang === 'ar' ? 'لي' : 'Owed to Me')
                                        ),
                                        React.createElement('span', { className: 'text-sm text-gray-500 flex items-center gap-1' },
                                            React.createElement(Icons.Calendar),
                                            item.date
                                        )
                                    ),
                                    item.description && React.createElement('p', { className: 'text-sm text-gray-500 mt-2' }, item.description)
                                )
                            ),
                            React.createElement('div', { className: 'flex items-center gap-4' },
                                React.createElement('p', { className: `text-xl font-bold ${
                                    item.type === 'owed' ? 'text-red-600' : 'text-emerald-600'
                                }` }, 
                                    parseFloat(item.amount).toLocaleString('en-US'), ' ', currencySymbol
                                ),
                                React.createElement('div', { className: 'flex gap-2' },
                                    React.createElement('button', {
                                        onClick: () => handleEdit(item),
                                        className: 'p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors'
                                    }, React.createElement(Icons.Edit)),
                                    React.createElement('button', {
                                        onClick: () => handleDelete(item.id),
                                        className: 'p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors'
                                    }, React.createElement(Icons.Trash))
                                )
                            )
                        )
                    )
                )
                : React.createElement('div', { className: 'p-12 text-center text-gray-400' },
                    React.createElement(Icons.Debts),
                    React.createElement('p', { className: 'mt-4' }, t(currentLang, 'noDebtRecords'))
                )
        )
    );
}

// Settings Page Component
function SettingsPage({ settings, setSettings, currentLang, t, dbOperations }) {
    const [formData, setFormData] = useState(settings);
    const fileInputRef = React.useRef(null);
    const { showToast } = React.useContext(ToastContext);

    const handleSave = () => {
        setSettings(formData);
        showToast(t(currentLang, 'settingsSaved'), 'success');
    };
    
    const setDarkMode = (value) => {
        setFormData({...formData, darkMode: value});
    };

    const currencies = [
        { value: 'SAR', label: currentLang === 'ar' ? 'ريال سعودي (ر.س)' : 'Saudi Riyal (SAR)' },
        { value: 'USD', label: currentLang === 'ar' ? 'دولار أمريكي ($)' : 'US Dollar ($)' },
        { value: 'EUR', label: currentLang === 'ar' ? 'يورو (€)' : 'Euro (€)' },
        { value: 'GBP', label: currentLang === 'ar' ? 'جنيه إسترليني (£)' : 'British Pound (£)' },
        { value: 'AED', label: currentLang === 'ar' ? 'درهم إماراتي (د.إ)' : 'UAE Dirham (AED)' },
        { value: 'KWD', label: currentLang === 'ar' ? 'دينار كويتي (د.ك)' : 'Kuwaiti Dinar (KWD)' },
        { value: 'QAR', label: currentLang === 'ar' ? 'ريال قطري (ر.ق)' : 'Qatari Riyal (QAR)' },
        { value: 'OMR', label: currentLang === 'ar' ? 'ريال عماني (ر.ع)' : 'Omani Riyal (OMR)' },
        { value: 'BHD', label: currentLang === 'ar' ? 'دينار بحريني (د.ب)' : 'Bahraini Dinar (BHD)' },
        { value: 'EGP', label: currentLang === 'ar' ? 'جنيه مصري (ج.م)' : 'Egyptian Pound (EGP)' },
        { value: 'JOD', label: currentLang === 'ar' ? 'دينار أردني (د.أ)' : 'Jordanian Dinar (JOD)' },
        { value: 'LBP', label: currentLang === 'ar' ? 'ليرة لبنانية (ل.ل)' : 'Lebanese Pound (LBP)' }
    ];

    const languages = [
        { value: 'ar', label: 'العربية', flag: '🇸🇦' },
        { value: 'en', label: 'English', flag: '🇬🇧' }
    ];
    
    const darkModeOptions = [
        { value: false, label: t(currentLang, 'lightMode') || 'Light', icon: '☀️' },
        { value: true, label: t(currentLang, 'darkMode') || 'Dark', icon: '🌙' }
    ];

    const settingCards = [
        {
            id: 'theme',
            title: t(currentLang, 'theme') || 'Theme',
            description: currentLang === 'ar' ? 'اختر المظهر المناسب لك' : 'Choose your preferred theme',
            icon: '🎨',
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 'language',
            title: t(currentLang, 'language'),
            description: currentLang === 'ar' ? 'اختر لغة التطبيق' : 'Select app language',
            icon: '🌐',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 'currency',
            title: t(currentLang, 'currency'),
            description: t(currentLang, 'currencyHelp'),
            icon: '💰',
            color: 'from-emerald-500 to-teal-500'
        },
        {
            id: 'commission',
            title: t(currentLang, 'commissionSettings'),
            description: t(currentLang, 'commissionHelp'),
            icon: '📊',
            color: 'from-orange-500 to-amber-500'
        },
        {
            id: 'data',
            title: t(currentLang, 'dataManagement'),
            description: currentLang === 'ar' ? 'تصدير واستيراد وحذف البيانات' : 'Export, import and delete data',
            icon: '📁',
            color: 'from-red-500 to-rose-500'
        }
    ];

    return React.createElement('div', { className: 'animate-fade-in max-w-5xl' },
        // Header
        React.createElement('div', { className: 'mb-10 text-center' },
            React.createElement('div', { className: 'inline-block p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 shadow-lg' },
                React.createElement(Icons.Settings, { className: 'w-12 h-12 text-white' })
            ),
            React.createElement('h2', { className: 'text-4xl font-bold text-gray-800 dark:text-white mb-3' }, t(currentLang, 'settingsTitle')),
            React.createElement('p', { className: 'text-gray-500 dark:text-gray-400 text-lg' }, t(currentLang, 'settingsSubtitle'))
        ),

        // Settings Grid
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
            // Theme Card
            React.createElement('div', { className: 'bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300' },
                React.createElement('div', { className: 'flex items-center gap-4 mb-4' },
                    React.createElement('div', { className: 'w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg' },
                        settingCards[0].icon
                    ),
                    React.createElement('div', {},
                        React.createElement('h3', { className: 'text-xl font-bold text-gray-800 dark:text-white' }, settingCards[0].title),
                        React.createElement('p', { className: 'text-sm text-gray-500 dark:text-gray-400' }, settingCards[0].description)
                    )
                ),
                React.createElement('div', { className: 'flex gap-3' },
                    React.createElement('button', {
                        onClick: () => setDarkMode(false),
                        className: `flex-1 px-4 py-4 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${!formData.darkMode ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 shadow-md' : 'border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-400'}`
                    },
                        React.createElement('span', { className: 'text-2xl' }, darkModeOptions[0].icon),
                        React.createElement('span', { className: 'font-medium' }, darkModeOptions[0].label)
                    ),
                    React.createElement('button', {
                        onClick: () => setDarkMode(true),
                        className: `flex-1 px-4 py-4 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${formData.darkMode ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 shadow-md' : 'border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-400'}`
                    },
                        React.createElement('span', { className: 'text-2xl' }, darkModeOptions[1].icon),
                        React.createElement('span', { className: 'font-medium' }, darkModeOptions[1].label)
                    )
                )
            ),

            // Language Card
            React.createElement('div', { className: 'bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300' },
                React.createElement('div', { className: 'flex items-center gap-4 mb-4' },
                    React.createElement('div', { className: 'w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg' },
                        settingCards[1].icon
                    ),
                    React.createElement('div', {},
                        React.createElement('h3', { className: 'text-xl font-bold text-gray-800 dark:text-white' }, settingCards[1].title),
                        React.createElement('p', { className: 'text-sm text-gray-500 dark:text-gray-400' }, settingCards[1].description)
                    )
                ),
                React.createElement('div', { className: 'space-y-2' },
                    languages.map(lang => 
                        React.createElement('button', {
                            key: lang.value,
                            onClick: () => setFormData({...formData, language: lang.value}),
                            className: `w-full px-4 py-4 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${formData.language === lang.value ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-md' : 'border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:border-blue-300'}`
                        },
                            React.createElement('span', { className: 'text-3xl' }, lang.flag),
                            React.createElement('span', { className: 'font-medium text-lg' }, lang.label)
                        )
                    )
                )
            ),

            // Currency Card
            React.createElement('div', { className: 'bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300' },
                React.createElement('div', { className: 'flex items-center gap-4 mb-4' },
                    React.createElement('div', { className: 'w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-2xl shadow-lg' },
                        settingCards[2].icon
                    ),
                    React.createElement('div', {},
                        React.createElement('h3', { className: 'text-xl font-bold text-gray-800 dark:text-white' }, settingCards[2].title),
                        React.createElement('p', { className: 'text-sm text-gray-500 dark:text-gray-400' }, settingCards[2].description)
                    )
                ),
                React.createElement('select', {
                    value: formData.currency,
                    onChange: (e) => setFormData({...formData, currency: e.target.value}),
                    className: 'w-full px-4 py-4 rounded-2xl border-2 border-gray-200 dark:border-slate-600 input-focus focus:outline-none focus:border-emerald-500 bg-gray-50 dark:bg-slate-700 dark:text-white text-lg font-medium transition-all'
                },
                    currencies.map(curr => React.createElement('option', { key: curr.value, value: curr.value }, curr.label))
                )
            ),

            // Commission Card
            React.createElement('div', { className: 'bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300' },
                React.createElement('div', { className: 'flex items-center gap-4 mb-4' },
                    React.createElement('div', { className: 'w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-2xl shadow-lg' },
                        settingCards[3].icon
                    ),
                    React.createElement('div', {},
                        React.createElement('h3', { className: 'text-xl font-bold text-gray-800 dark:text-white' }, settingCards[3].title),
                        React.createElement('p', { className: 'text-sm text-gray-500 dark:text-gray-400' }, settingCards[3].description)
                    )
                ),
                React.createElement('div', { className: 'flex items-center gap-4' },
                    React.createElement('div', { className: 'flex-1' },
                        React.createElement('input', {
                            type: 'number',
                            min: '0',
                            max: '100',
                            value: formData.commissionRate,
                            onChange: (e) => setFormData({...formData, commissionRate: parseFloat(e.target.value) || 0}),
                            className: 'w-full px-4 py-4 rounded-2xl border-2 border-gray-200 dark:border-slate-600 input-focus focus:outline-none focus:border-orange-500 bg-gray-50 dark:bg-slate-700 dark:text-white text-lg font-bold text-center transition-all',
                            placeholder: '0'
                        })
                    ),
                    React.createElement('span', { className: 'text-3xl font-bold text-orange-500' }, '%')
                )
            ),

            // Data Management Card - Full Width
            React.createElement('div', { className: 'bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 md:col-span-2' },
                React.createElement('div', { className: 'flex items-center gap-4 mb-6' },
                    React.createElement('div', { className: 'w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-2xl shadow-lg' },
                        settingCards[4].icon
                    ),
                    React.createElement('div', {},
                        React.createElement('h3', { className: 'text-xl font-bold text-gray-800 dark:text-white' }, settingCards[4].title),
                        React.createElement('p', { className: 'text-sm text-gray-500 dark:text-gray-400' }, settingCards[4].description)
                    )
                ),
                React.createElement('div', { className: 'flex flex-wrap gap-4' },
                    React.createElement('button', {
                        onClick: async () => {
                            if (confirm(t(currentLang, 'deleteConfirm'))) {
                                await dbOperations.clearAll();
                                showToast(currentLang === 'ar' ? 'تم حذف جميع البيانات بنجاح' : 'All data deleted successfully', 'success');
                                setTimeout(() => location.reload(), 1500);
                            }
                        },
                        className: 'flex-1 min-w-[200px] px-6 py-4 rounded-2xl font-bold border-2 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all flex items-center justify-center gap-2'
                    },
                        React.createElement(Icons.Trash, { className: 'w-5 h-5' }),
                        t(currentLang, 'deleteAllData')
                    ),
                    React.createElement('button', {
                        onClick: async () => {
                            try {
                                const data = await dbOperations.exportAll();
                                
                                if (!data) {
                                    showToast(currentLang === 'ar' ? 'فشل تصدير البيانات' : 'Failed to export data', 'error');
                                    return;
                                }
                                
                                const hasData = data.income?.length > 0 || 
                                              data.expenses?.length > 0 || 
                                              data.tasks?.length > 0 || 
                                              data.debts?.length > 0 ||
                                              data.settings;
                                
                                if (!hasData) {
                                    showToast(currentLang === 'ar' ? 'لا توجد بيانات للتصدير' : 'No data to export', 'warning');
                                    return;
                                }
                                
                                const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                                const url = URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = url;
                                a.download = `backup-${new Date().toISOString().split('T')[0]}.json`;
                                document.body.appendChild(a);
                                a.click();
                                document.body.removeChild(a);
                                setTimeout(() => URL.revokeObjectURL(url), 100);
                                
                                showToast(currentLang === 'ar' ? 'تم تصدير البيانات بنجاح!' : 'Data exported successfully!', 'success');
                            } catch (error) {
                                console.error('Export error:', error);
                                showToast(currentLang === 'ar' ? 'حدث خطأ أثناء تصدير البيانات' : 'Error exporting data: ' + error.message, 'error');
                            }
                        },
                        className: 'flex-1 min-w-[200px] px-6 py-4 rounded-2xl font-bold border-2 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center justify-center gap-2'
                    },
                        React.createElement(Icons.Package, { className: 'w-5 h-5' }),
                        t(currentLang, 'exportData')
                    ),
                    React.createElement('button', {
                        onClick: () => fileInputRef.current?.click(),
                        className: 'flex-1 min-w-[200px] px-6 py-4 rounded-2xl font-bold border-2 border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all flex items-center justify-center gap-2'
                    },
                        React.createElement(Icons.Wallet, { className: 'w-5 h-5' }),
                        t(currentLang, 'importData')
                    ),
                    React.createElement('input', {
                        ref: fileInputRef,
                        type: 'file',
                        accept: '.json',
                        onChange: async (e) => {
                            const file = e.target.files[0];
                            if (!file) return;
                            
                            try {
                                const text = await file.text();
                                const data = JSON.parse(text);
                                
                                if (confirm(t(currentLang, 'importConfirm') || 'This will replace all existing data. Continue?')) {
                                    await dbOperations.importAll(data);
                                    showToast(t(currentLang, 'importSuccess') || 'Data imported successfully!', 'success');
                                    setTimeout(() => location.reload(), 1500);
                                }
                            } catch (error) {
                                showToast(t(currentLang, 'importError') || 'Error importing data: ' + error.message, 'error');
                            }
                            e.target.value = '';
                        },
                        className: 'hidden'
                    })
                )
            )
        ),

        // Save Button
        React.createElement('div', { className: 'mt-8' },
            React.createElement('button', {
                onClick: handleSave,
                className: 'btn-gradient text-white px-12 py-4 rounded-2xl font-bold text-lg w-full shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3'
            },
                React.createElement(Icons.Check, { className: 'w-6 h-6' }),
                t(currentLang, 'saveSettings')
            )
        )
    );
}

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(ToastProvider, null,
    React.createElement(App)
));
