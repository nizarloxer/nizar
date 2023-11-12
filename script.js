const levels = [
    [
{ word: 'Hello', translation: 'مرحبا', options: ['مرحبا'] },
{ word: 'مرحبا', translation: 'hello', options: ['hello'] },
{ word: 'Goodbye', translation: 'وداعاً', options: ['وداعاً'] },
{ word: 'Thank you', translation: 'شكراً', options: ['شكراً'] },
{ word: 'Please', translation: 'من فضلك', options: ['من فضلك'] },
{ word: 'Sorry', translation: 'آسف', options: ['آسف'] },
{ word: 'Apple', translation: 'تفاحة', options: ['تفاحة'] },
{ word: 'Car', translation: 'سيارة', options: ['سيارة'] },
{ word: 'Book', translation: 'كتاب', options: ['كتاب'] },
{ word: 'Computer', translation: 'حاسوب', options: ['حاسوب'] },
{ word: 'Love', translation: 'حب', options: ['حب'] },
{ word: 'Beautiful', translation: 'جميل', options: ['جميل'] },
{ word: 'Peace', translation: 'سلام', options: ['سلام'] },
{ word: 'Friendship', translation: 'صداقة', options: ['صداقة'] },
{ word: 'Challenge', translation: 'تحدي', options: ['تحدي'] },
{ word: 'Success', translation: 'نجاح', options: ['نجاح'] },
{ word: 'Knowledge', translation: 'معرفة', options: ['معرفة'] },
{ word: 'Wisdom', translation: 'حكمة', options: ['حكمة'] },
{ word: 'Courage', translation: 'شجاعة', options: ['شجاعة'] },
{ word: 'Dream', translation: 'حلم', options: ['حلم'] },
{ word: 'Adventure', translation: 'مغامرة', options: ['مغامرة'] },
{ word: 'Hope', translation: 'أمل', options: ['أمل'] },
{ word: 'Kindness', translation: 'لطف', options: ['لطف'] },
{ word: 'Harmony', translation: 'تناغم', options: ['تناغم'] },
{ word: 'Innovation', translation: 'ابتكار', options: ['ابتكار'] },
{ word: 'Inspiration', translation: 'إلهام', options: ['إلهام'] },
{ word: 'Passion', translation: 'شغف', options: ['شغف'] },
{ word: 'Resilience', translation: 'مرونة', options: ['مرونة'] },
{ word: 'Gratitude', translation: 'امتنان', options: ['امتنان'] },
{ word: 'Patience', translation: 'صبر', options: ['صبر'] },
{ word: 'Optimism', translation: 'تفاؤل', options: ['تفاؤل'] },
{ word: 'Calm', translation: 'هدوء', options: ['هدوء'] },
{ word: 'Balance', translation: 'توازن', options: ['توازن'] },
{ word: 'Imagination', translation: 'خيال', options: ['خيال'] },
{ word: 'Perseverance', translation: 'مثابرة', options: ['مثابرة'] },
{ word: 'Determination', translation: 'تصميم', options: ['تصميم'] },
{ word: 'Strength', translation: 'قوة', options: ['قوة'] },
{ word: 'Change', translation: 'تغيير', options: ['تغيير'] },
{ word: 'Purpose', translation: 'غرض', options: ['غرض'] },
{ word: 'Ambition', translation: 'طموح', options: ['طموح'] },
{ word: 'Integrity', translation: 'نزاهة', options: ['نزاهة'] },
{ word: 'Empathy', translation: 'تعاطف', options: ['تعاطف'] },
{ word: 'Inclusivity', translation: 'شمولية', options: ['شمولية'] },
{ word: 'Excellence', translation: 'تفوق', options: ['تفوق'] },
{ word: 'Collaboration', translation: 'تعاون', options: ['تعاون'] },
{ word: 'Adaptability', translation: 'قابلية التكيف', options: ['قابلية التكيف'] },
{ word: 'Curiosity', translation: 'فضول', options: ['فضول'] },
{ word: 'Education', translation: 'تعليم', options: ['تعليم'] },
{ word: 'Gratitude', translation: 'امتنان', options: ['امتنان'] },
{ word: 'Self-discipline', translation: 'تنظيم النفس', options: ['تنظيم النفس'] },
{ word: 'Mindfulness', translation: 'الوعي الحاضر', options: ['الوعي الحاضر'] },
{ word: 'Respect', translation: 'احترام', options: ['احترام'] },
{ word: 'Communication', translation: 'تواصل', options: ['تواصل'] },
{ word: 'Compassion', translation: 'رحمة', options: ['رحمة'] },
{ word: 'Purpose', translation: 'غرض', options: ['غرض'] },
{ word: 'Vision', translation: 'رؤية', options: ['رؤية'] },
{ word: 'Focus', translation: 'تركيز', options: ['تركيز'] },
{ word: 'Empowerment', translation: 'تمكين', options: ['تمكين'] },
{ word: 'edgeable', translation: 'متعلم', options: ['متعلم'] },
{ word: 'Resilient', translation: 'متماسك', options: ['متماسك'] },
{ word: 'Innovative', translation: 'مبتكر', options: ['مبتكر'] },
{ word: 'Persistent', translation: 'مستمر', options: ['مستمر'] },
{ word: 'Grateful', translation: 'ممتن', options: ['ممتن'] },
{ word: 'Moon', translation: 'قمر', options: ['قمر'] },
{ word: 'Star', translation: 'نجم', options: ['نجم'] },
{ word: 'Cloud', translation: 'سحابة', options: ['سحابة'] },
{ word: 'Earth', translation: 'أرض', options: ['أرض'] },
{ word: 'Water', translation: 'ماء', options: ['ماء'] },
{ word: 'Fire', translation: 'نار', options: ['نار'] },
{ word: 'Hope', translation: 'أمل', options: ['أمل'] },
{ word: 'Happiness', translation: 'سعادة', options: ['سعادة'] },
{ word: 'Freedom', translation: 'حرية', options: ['حرية'] },
{ word: 'Justice', translation: 'عدالة', options: ['عدالة'] },
{ word: 'Compassion', translation: 'رحمة', options: ['رحمة'] },
{ word: 'Unity', translation: 'وحدة', options: ['وحدة'] },
{ word: 'Day', translation: 'نهار', options: ['نهار'] },
{ word: 'Night', translation: 'ليل', options: ['ليل'] },
{ word: 'Water', translation: 'ماء', options: ['ماء'] },
{ word: 'Earth', translation: 'أرض', options: ['أرض'] },
{ word: 'Fire', translation: 'نار', options: ['نار'] },
{ word: 'Moon', translation: 'قمر', options: ['قمر'] },
{ word: 'Star', translation: 'نجمة', options: ['نجمة'] },
{ word: 'Tree', translation: 'شجرة', options: ['شجرة'] },
{ word: 'Mountain', translation: 'جبل', options: ['جبل'] },
{ word: 'Ocean', translation: 'محيط', options: ['محيط'] },
{ word: 'Sky', translation: 'سماء', options: ['سماء'] },
{ word: 'Cloud', translation: 'سحابة', options: ['سحابة'] },
{ word: 'Rain', translation: 'مطر', options: ['مطر'] },
{ word: 'Snow', translation: 'ثلج', options: ['ثلج'] },
{ word: 'Wind', translation: 'رياح', options: ['رياح'] },
{ word: 'Weather', translation: 'طقس', options: ['طقس'] },
{ word: 'Plant', translation: 'نبات', options: ['نبات'] },
{ word: 'Animal', translation: 'حيوان', options: ['حيوان'] },
{ word: 'Bird', translation: 'طائر', options: ['طائر'] },
{ word: 'Fish', translation: 'سمك', options: ['سمك'] },
{ word: 'Insect', translation: 'حشرة', options: ['حشرة'] },
{ word: 'Forest', translation: 'غابة', options: ['غابة'] },
{ word: 'Desert', translation: 'صحراء', options: ['صحراء'] },
{ word: 'Flower', translation: 'زهرة', options: ['زهرة'] },
{ word: 'Fruit', translation: 'فاكهة', options: ['فاكهة'] },
{ word: 'Vegetable', translation: 'خضار', options: ['خضار'] },
{ word: 'Mountain', translation: 'جبل', options: ['جبل'] },
{ word: 'River', translation: 'نهر', options: ['نهر'] },
{ word: 'Lake', translation: 'بحيرة', options: ['بحيرة'] },
{ word: 'Beach', translation: 'شاطئ', options: ['شاطئ'] },
{ word: 'Wave', translation: 'موجة', options: ['موجة'] },
{ word: 'Stone', translation: 'حجر', options: ['حجر'] },
{ word: 'Sand', translation: 'رمل', options: ['رمل'] },
{ word: 'Island', translation: 'جزيرة', options: ['جزيرة'] },
{ word: 'Sunset', translation: 'غروب الشمس', options: ['غروب الشمس'] },
{ word: 'Morning', translation: 'صباح', options: ['صباح'] },
{ word: 'Night', translation: 'ليل', options: ['ليل'] },
{ word: 'Day', translation: 'نهار', options: ['نهار'] },
{ word: 'Month', translation: 'شهر', options: ['شهر'] },
{ word: 'Year', translation: 'سنة', options: ['سنة'] },
{ word: 'Time', translation: 'وقت', options: ['وقت'] },
{ word: 'Clock', translation: 'ساعة', options: ['ساعة'] },
{ word: 'Minute', translation: 'دقيقة', options: ['دقيقة'] },
{ word: 'Hour', translation: 'ساعة', options: ['ساعة'] },
{ word: 'Second', translation: 'ثانية', options: ['ثانية'] },
{ word: 'Past', translation: 'ماضي', options: ['ماضي'] },
{ word: 'Future', translation: 'مستقبل', options: ['مستقبل'] },
{ word: 'Now', translation: 'الآن', options: ['الآن'] },
{ word: 'History', translation: 'تاريخ', options: ['تاريخ'] },
{ word: 'Culture', translation: 'ثقافة', options: ['ثقافة'] },
{ word: 'Tradition', translation: 'تقليد', options: ['تقليد'] },
{ word: 'Custom', translation: 'عرف', options: ['عرف'] },
{ word: 'Language', translation: 'لغة', options: ['لغة'] },
{ word: 'Art', translation: 'فن', options: ['فن'] },
{ word: 'Music', translation: 'موسيقى', options: ['موسيقى'] },
{ word: 'Dance', translation: 'رقص', options: ['رقص'] },
{ word: 'Theater', translation: 'مسرح', options: ['مسرح'] },
{ word: 'Film', translation: 'فيلم', options: ['فيلم'] },
{ word: 'Painting', translation: 'لوحة', options: ['لوحة'] },
{ word: 'Sculpture', translation: 'نحت', options: ['نحت'] },
{ word: 'Architecture', translation: 'عمارة', options: ['عمارة'] },
{ word: 'Technology', translation: 'تكنولوجيا', options: ['تكنولوجيا'] },
{ word: 'Science', translation: 'علم', options: ['علم'] },
{ word: 'Mathematics', translation: 'رياضيات', options: ['رياضيات'] },
{ word: 'Physics', translation: 'فيزياء', options: ['فيزياء'] },
{ word: 'Chemistry', translation: 'كيمياء', options: ['كيمياء'] },
{ word: 'Biology', translation: 'أحياء', options: ['أحياء'] },
{ word: 'Environment', translation: 'بيئة', options: ['بيئة'] },
{ word: 'Climate', translation: 'مناخ', options: ['مناخ'] },
{ word: 'Weather', translation: 'طقس', options: ['طقس'] },
{ word: 'Planet', translation: 'كوكب', options: ['كوكب'] },
{ word: 'Solar System', translation: 'النظام الشمسي', options: ['النظام الشمسي'] },
{ word: 'Galaxy', translation: 'مجرة', options: ['مجرة'] },
{ word: 'Universe', translation: 'كون', options: ['كون'] },
{ word: 'Life', translation: 'حياة', options: ['حياة'] },
{ word: 'Death', translation: 'موت', options: ['موت'] },
{ word: 'Birth', translation: 'ولادة', options: ['ولادة'] },
{ word: 'Body', translation: 'جسم', options: ['جسم'] },
{ word: 'Mind', translation: 'عقل', options: ['عقل'] },
{ word: 'Soul', translation: 'روح', options: ['روح'] },
{ word: 'Heart', translation: 'قلب', options: ['قلب'] },
{ word: 'Emotion', translation: 'عاطفة', options: ['عاطفة'] },
{ word: 'Thought', translation: 'فكر', options: ['فكر'] },
{ word: 'Reality', translation: 'واقع', options: ['واقع'] },
{ word: 'Imagination', translation: 'خيال', options: ['خيال'] },
{ word: 'Creativity', translation: 'إبداع', options: ['إبداع'] },
{ word: 'Innovation', translation: 'ابتكار', options: ['ابتكار'] },
{ word: 'Inspiration', translation: 'إلهام', options: ['إلهام'] },
{ word: 'Motivation', translation: 'تحفيز', options: ['تحفيز'] },
{ word: 'Failure', translation: 'فشل', options: ['فشل'] },
{ word: 'Opportunity', translation: 'فرصة', options: ['فرصة'] },
{ word: 'Risk', translation: 'مخاطرة', options: ['مخاطرة'] },
{ word: 'Safety', translation: 'سلامة', options: ['سلامة'] },
{ word: 'Health', translation: 'صحة', options: ['صحة'] },
{ word: 'Wellness', translation: 'رفاهية', options: ['رفاهية'] },
{ word: 'Fitness', translation: 'لياقة بدنية', options: ['لياقة بدنية'] },
{ word: 'Exercise', translation: 'تمرين', options: ['تمرين'] },
{ word: 'Nutrition', translation: 'تغذية', options: ['تغذية'] },
{ word: 'Sleep', translation: 'نوم', options: ['نوم'] },
{ word: 'Rest', translation: 'راحة', options: ['راحة'] },
{ word: 'Air', translation: 'هواء', options: ['هواء'] },
{ word: 'Water', translation: 'ماء', options: ['ماء'] },
{ word: 'Fire', translation: 'نار', options: ['نار'] },
{ word: 'Earth', translation: 'أرض', options: ['أرض'] },
{ word: 'Sun', translation: 'شمس', options: ['شمس'] },
{ word: 'Moon', translation: 'قمر', options: ['قمر'] },
{ word: 'Star', translation: 'نجم', options: ['نجم'] },
{ word: 'Cloud', translation: 'سحابة', options: ['سحابة'] },
{ word: 'Hope', translation: 'أمل', options: ['أمل'] },
{ word: 'Happiness', translation: 'سعادة', options: ['سعادة'] },
{ word: 'Freedom', translation: 'حرية', options: ['حرية'] },
{ word: 'Compassion', translation: 'رحمة', options: ['رحمة'] },
{ word: 'Unity', translation: 'وحدة', options: ['وحدة'] },
{ word: 'Day', translation: 'نهار', options: ['نهار'] },
{ word: 'Night', translation: 'ليل', options: ['ليل'] },
{ word: 'Morning', translation: 'صباح', options: ['صباح'] },
{ word: 'Evening', translation: 'مساء', options: ['مساء'] },
{ word: 'Summer', translation: 'صيف', options: ['صيف'] },
{ word: 'Winter', translation: 'شتاء', options: ['شتاء'] },
{ word: 'Spring', translation: 'ربيع', options: ['ربيع'] },
{ word: 'Fall', translation: 'خريف', options: ['خريف'] },
{ word: 'Sky', translation: 'سماء', options: ['سماء'] },
{ word: 'Cloud', translation: 'سحابة', options: ['سحابة'] },
{ word: 'Tree', translation: 'شجرة', options: ['شجرة'] },
{ word: 'Flower', translation: 'زهرة', options: ['زهرة'] },
{ word: 'Bird', translation: 'طائر', options: ['طائر'] },
{ word: 'Fish', translation: 'سمكة', options: ['سمكة'] },
{ word: 'Animal', translation: 'حيوان', options: ['حيوان'] },
{ word: 'Person', translation: 'شخص', options: ['شخص'] },
{ word: 'Man', translation: 'رجل', options: ['رجل'] },
{ word: 'Woman', translation: 'امرأة', options: ['امرأة'] },
{ word: 'Child', translation: 'طفل', options: ['طفل'] },
{ word: 'Sky', translation: 'سماء', options: ['سماء'] },
{ word: 'Cloud', translation: 'سحابة', options: ['سحابة'] },
{ word: 'Tree', translation: 'شجرة', options: ['شجرة'] },
{ word: 'Flower', translation: 'زهرة', options: ['زهرة'] },
{ word: 'Bird', translation: 'طائر', options: ['طائر'] },
{ word: 'Fish', translation: 'سمكة', options: ['سمكة'] },
{ word: 'Animal', translation: 'حيوان', options: ['حيوان'] },
{ word: 'Person', translation: 'شخص', options: ['شخص'] },
{ word: 'Man', translation: 'رجل', options: ['رجل'] },
{ word: 'Woman', translation: 'امرأة', options: ['امرأة'] },
{ word: 'Child', translation: 'طفل', options: ['طفل'] },
{ word: 'Life', translation: 'حياة', options: ['حياة'] },
{ word: 'Death', translation: 'موت', options: ['موت'] },
{ word: 'Birth', translation: 'ولادة', options: ['ولادة'] },
{ word: 'Body', translation: 'جسم', options: ['جسم'] },
{ word: 'Mind', translation: 'عقل', options: ['عقل'] },
{ word: 'Soul', translation: 'روح', options: ['روح'] },
{ word: 'Heart', translation: 'قلب', options: ['قلب'] },
{ word: 'Emotion', translation: 'عاطفة', options: ['عاطفة'] },
{ word: 'Thought', translation: 'فكر', options: ['فكر'] },
{ word: 'Dream', translation: 'حلم', options: ['حلم'] },
{ word: 'Reality', translation: 'واقع', options: ['واقع'] },
{ word: 'Imagination', translation: 'خيال', options: ['خيال'] },
{ word: 'Creativity', translation: 'إبداع', options: ['إبداع'] },
{ word: 'Innovation', translation: 'ابتكار', options: ['ابتكار'] },
{ word: 'Inspiration', translation: 'إلهام', options: ['إلهام'] },
{ word: 'Motivation', translation: 'تحفيز', options: ['تحفيز'] },
{ word: 'Success', translation: 'نجاح', options: ['نجاح'] },
{ word: 'Failure', translation: 'فشل', options: ['فشل'] },
{ word: 'Challenge', translation: 'تحدي', options: ['تحدي'] },
{ word: 'Opportunity', translation: 'فرصة', options: ['فرصة'] },
{ word: 'Risk', translation: 'مخاطرة', options: ['مخاطرة'] },
{ word: 'Safety', translation: 'سلامة', options: ['سلامة'] },
{ word: 'Health', translation: 'صحة', options: ['صحة'] },
{ word: 'Wellness', translation: 'رفاهية', options: ['رفاهية'] },
{ word: 'Fitness', translation: 'لياقة بدنية', options: ['لياقة بدنية'] },
{ word: 'Exercise', translation: 'تمرين', options: ['تمرين'] },
{ word: 'Nutrition', translation: 'تغذية', options: ['تغذية'] },
{ word: 'Sleep', translation: 'نوم', options: ['نوم'] },
{ word: 'Rest', translation: 'راحة', options: ['راحة'] },
{ word: 'Air', translation: 'هواء', options: ['هواء'] },
{ word: 'Water', translation: 'ماء', options: ['ماء'] },
{ word: 'Fire', translation: 'نار', options: ['نار'] },
{ word: 'Earth', translation: 'أرض', options: ['أرض'] },
{ word: 'Sun', translation: 'شمس', options: ['شمس'] },
{ word: 'Moon', translation: 'قمر', options: ['قمر'] },
{ word: 'Star', translation: 'نجم', options: ['نجم'] },
{ word: 'Cloud', translation: 'سحابة', options: ['سحابة'] },
{ word: 'Love', translation: 'حب', options: ['حب'] },
{ word: 'Peace', translation: 'سلام', options: ['سلام'] },
{ word: 'Hope', translation: 'أمل', options: ['أمل'] },
{ word: 'Happiness', translation: 'سعادة', options: ['سعادة'] },
{ word: 'Success', translation: 'نجاح', options: ['نجاح'] },
{ word: 'Freedom', translation: 'حرية', options: ['حرية'] },
{ word: 'Compassion', translation: 'رحمة', options: ['رحمة'] },
{ word: 'Unity', translation: 'وحدة', options: ['وحدة'] },
{ word: 'Day', translation: 'نهار', options: ['نهار'] },
{ word: 'Night', translation: 'ليل', options: ['ليل'] },
{ word: 'Morning', translation: 'صباح', options: ['صباح'] },
{ word: 'Evening', translation: 'مساء', options: ['مساء'] },
{ word: 'Summer', translation: 'صيف', options: ['صيف'] },
{ word: 'Winter', translation: 'شتاء', options: ['شتاء'] },
{ word: 'Spring', translation: 'ربيع', options: ['ربيع'] },
{ word: 'Fall', translation: 'خريف', options: ['خريف'] },
{ word: 'Time', translation: 'وقت', options: ['وقت'] },
{ word: 'Space', translation: 'فضاء', options: ['فضاء'] },
{ word: 'Universe', translation: 'كون', options: ['كون'] },
{ word: 'Galaxy', translation: 'مجرة', options: ['مجرة'] },
{ word: 'Planet', translation: 'كوكب', options: ['كوكب'] },
{ word: 'Earth', translation: 'أرض', options: ['أرض'] },
{ word: 'Nature', translation: 'طبيعة', options: ['طبيعة'] },
{ word: 'Ecology', translation: 'البيئة', options: ['البيئة'] },
{ word: 'Pollution', translation: 'تلوث', options: ['تلوث'] },
{ word: 'Recycle', translation: 'إعادة تدوير', options: ['إعادة تدوير'] },
{ word: 'Technology', translation: 'تكنولوجيا', options: ['تكنولوجيا'] },
{ word: 'Science', translation: 'علم', options: ['علم'] },
{ word: 'Mathematics', translation: 'رياضيات', options: ['رياضيات'] },
{ word: 'Physics', translation: 'فيزياء', options: ['فيزياء'] },
{ word: 'Chemistry', translation: 'كيمياء', options: ['كيمياء'] },
{ word: 'Biology', translation: 'أحياء', options: ['أحياء'] },
{ word: 'Environment', translation: 'بيئة', options: ['بيئة'] },
{ word: 'Climate', translation: 'مناخ', options: ['مناخ'] },
{ word: 'Weather', translation: 'طقس', options: ['طقس'] },
{ word: 'Air', translation: 'هواء', options: ['هواء'] },
{ word: 'Water', translation: 'ماء', options: ['ماء'] },
{ word: 'Fire', translation: 'نار', options: ['نار'] },
{ word: 'Earth', translation: 'أرض', options: ['أرض'] },
{ word: 'Sun', translation: 'شمس', options: ['شمس'] },
{ word: 'Moon', translation: 'قمر', options: ['قمر'] },
{ word: 'Star', translation: 'نجم', options: ['نجم'] },
{ word: 'Cloud', translation: 'سحابة', options: ['سحابة'] },
{ word: 'Love', translation: 'حب', options: ['حب'] },
{ word: 'Peace', translation: 'سلام', options: ['سلام'] },
{ word: 'Hope', translation: 'أمل', options: ['أمل'] },
{ word: 'Happiness', translation: 'سعادة', options: ['سعادة'] },
{ word: 'Success', translation: 'نجاح', options: ['نجاح'] },
{ word: 'Freedom', translation: 'حرية', options: ['حرية'] },
{ word: 'Compassion', translation: 'رحمة', options: ['رحمة'] },
{ word: 'Unity', translation: 'وحدة', options: ['وحدة'] },
{ word: 'Day', translation: 'نهار', options: ['نهار'] },
{ word: 'Night', translation: 'ليل', options: ['ليل'] },
{ word: 'Morning', translation: 'صباح', options: ['صباح'] },
{ word: 'Evening', translation: 'مساء', options: ['مساء'] },
{ word: 'Summer', translation: 'صيف', options: ['صيف'] },
{ word: 'Winter', translation: 'شتاء', options: ['شتاء'] },
{ word: 'Spring', translation: 'ربيع', options: ['ربيع'] },
{ word: 'Fall', translation: 'خريف', options: ['خريف'] },
{ word: 'Time', translation: 'وقت', options: ['وقت'] },
{ word: 'Space', translation: 'فضاء', options: ['فضاء'] },
{ word: 'Universe', translation: 'كون', options: ['كون'] },
{ word: 'Galaxy', translation: 'مجرة', options: ['مجرة'] },
{ word: 'Planet', translation: 'كوكب', options: ['كوكب'] },
{ word: 'Earth', translation: 'أرض', options: ['أرض'] },
{ word: 'Nature', translation: 'طبيعة', options: ['طبيعة'] },
{ word: 'Ecology', translation: 'البيئة', options: ['البيئة'] },
{ word: 'Pollution', translation: 'تلوث', options: ['تلوث'] },
{ word: 'Air', translation: 'هواء', options: ['هواء'] },
{ word: 'Water', translation: 'ماء', options: ['ماء'] },
{ word: 'Fire', translation: 'نار', options: ['نار'] },
{ word: 'Earth', translation: 'أرض', options: ['أرض'] },
{ word: 'Sun', translation: 'شمس', options: ['شمس'] },
{ word: 'Moon', translation: 'قمر', options: ['قمر'] },
{ word: 'Star', translation: 'نجم', options: ['نجم'] },
{ word: 'Cloud', translation: 'سحابة', options: ['سحابة'] },
{ word: 'Love', translation: 'حب', options: ['حب'] },
{ word: 'Peace', translation: 'سلام', options: ['سلام'] },
{ word: 'Hope', translation: 'أمل', options: ['أمل'] },
{ word: 'Happiness', translation: 'سعادة', options: ['سعادة'] },
{ word: 'Success', translation: 'نجاح', options: ['نجاح'] },
{ word: 'Freedom', translation: 'حرية', options: ['حرية'] },
{ word: 'Compassion', translation: 'رحمة', options: ['رحمة'] },
{ word: 'Unity', translation: 'وحدة', options: ['وحدة'] },
{ word: 'Day', translation: 'نهار', options: ['نهار'] },
{ word: 'Night', translation: 'ليل', options: ['ليل'] },
{ word: 'Morning', translation: 'صباح', options: ['صباح'] },
{ word: 'Evening', translation: 'مساء', options: ['مساء'] },
{ word: 'Summer', translation: 'صيف', options: ['صيف'] },
{ word: 'Winter', translation: 'شتاء', options: ['شتاء'] },
{ word: 'Spring', translation: 'ربيع', options: ['ربيع'] },
{ word: 'Fall', translation: 'خريف', options: ['خريف'] },
{ word: 'Sky', translation: 'سماء', options: ['سماء'] },
{ word: 'Cloud', translation: 'سحابة', options: ['سحابة'] },
{ word: 'Tree', translation: 'شجرة', options: ['شجرة'] },
{ word: 'Flower', translation: 'زهرة', options: ['زهرة'] },
{ word: 'Bird', translation: 'طائر', options: ['طائر'] },
{ word: 'Fish', translation: 'سمكة', options: ['سمكة'] },
{ word: 'Animal', translation: 'حيوان', options: ['حيوان'] },
{ word: 'Person', translation: 'شخص', options: ['شخص'] },
{ word: 'Man', translation: 'رجل', options: ['رجل'] },
{ word: 'Woman', translation: 'امرأة', options: ['امرأة'] },
{ word: 'Child', translation: 'طفل', options: ['طفل'] },
{ word: 'Planet', translation: 'كوكب', options: ['كوكب'] },
{ word: 'Solar System', translation: 'النظام الشمسي', options: ['النظام الشمسي'] },
{ word: 'Galaxy', translation: 'مجرة', options: ['مجرة'] },
{ word: 'Universe', translation: 'كون', options: ['كون'] },
{ word: 'Life', translation: 'حياة', options: ['حياة'] },
{ word: 'Death', translation: 'موت', options: ['موت'] },
{ word: 'Birth', translation: 'ولادة', options: ['ولادة'] },
{ word: 'Body', translation: 'جسم', options: ['جسم'] },
{ word: 'Mind', translation: 'عقل', options: ['عقل'] },
{ word: 'Soul', translation: 'روح', options: ['روح'] },
{ word: 'Heart', translation: 'قلب', options: ['قلب'] },
{ word: 'Emotion', translation: 'عاطفة', options: ['عاطفة'] },
{ word: 'Thought', translation: 'فكر', options: ['فكر'] },
{ word: 'Dream', translation: 'حلم', options: ['حلم'] },
{ word: 'Reality', translation: 'واقع', options: ['واقع'] },
{ word: 'Imagination', translation: 'خيال', options: ['خيال'] },
{ word: 'Creativity', translation: 'إبداع', options: ['إبداع'] },
{ word: 'Innovation', translation: 'ابتكار', options: ['ابتكار'] },
{ word: 'Inspiration', translation: 'إلهام', options: ['إلهام'] },
{ word: 'Motivation', translation: 'تحفيز', options: ['تحفيز'] },
{ word: 'Success', translation: 'نجاح', options: ['نجاح'] },
{ word: 'Failure', translation: 'فشل', options: ['فشل'] },
{ word: 'Challenge', translation: 'تحدي', options: ['تحدي'] },
{ word: 'Opportunity', translation: 'فرصة', options: ['فرصة'] },
{ word: 'Risk', translation: 'مخاطرة', options: ['مخاطرة'] },
{ word: 'Safety', translation: 'سلامة', options: ['سلامة'] },
{ word: 'Health', translation: 'صحة', options: ['صحة'] },
{ word: 'Wellness', translation: 'رفاهية', options: ['رفاهية'] },
{ word: 'Fitness', translation: 'لياقة بدنية', options: ['لياقة بدنية'] },
{ word: 'Exercise', translation: 'تمرين', options: ['تمرين'] },
{ word: 'Nutrition', translation: 'تغذية', options: ['تغذية'] },
{ word: 'Sleep', translation: 'نوم', options: ['نوم'] },
{ word: 'Rest', translation: 'راحة', options: ['راحة'] },
{ word: 'Technology', translation: 'تكنولوجيا', options: ['تكنولوجيا'] },
{ word: 'Science', translation: 'علم', options: ['علم'] },
{ word: 'Mathematics', translation: 'رياضيات', options: ['رياضيات'] },
{ word: 'Physics', translation: 'فيزياء', options: ['فيزياء'] },
{ word: 'Chemistry', translation: 'كيمياء', options: ['كيمياء'] },
{ word: 'Biology', translation: 'أحياء', options: ['أحياء'] },
{ word: 'Environment', translation: 'بيئة', options: ['بيئة'] },
{ word: 'Climate', translation: 'مناخ', options: ['مناخ'] },
{ word: 'Weather', translation: 'طقس', options: ['طقس'] },
{ word: 'Sky', translation: 'سماء', options: ['سماء'] },
{ word: 'Cloud', translation: 'سحابة', options: ['سحابة'] },
{ word: 'Tree', translation: 'شجرة', options: ['شجرة'] },
{ word: 'Flower', translation: 'زهرة', options: ['زهرة'] },
{ word: 'Bird', translation: 'طائر', options: ['طائر'] },
{ word: 'Fish', translation: 'سمكة', options: ['سمكة'] },
{ word: 'Animal', translation: 'حيوان', options: ['حيوان'] },
{ word: 'Person', translation: 'شخص', options: ['شخص'] },
{ word: 'Man', translation: 'رجل', options: ['رجل'] },
{ word: 'Woman', translation: 'امرأة', options: ['امرأة'] },
{ word: 'Child', translation: 'طفل', options: ['طفل'] },
{ word: 'Life', translation: 'حياة', options: ['حياة'] },
{ word: 'Death', translation: 'موت', options: ['موت'] },
{ word: 'Birth', translation: 'ولادة', options: ['ولادة'] },
{ word: 'Body', translation: 'جسم', options: ['جسم'] },
{ word: 'Mind', translation: 'عقل', options: ['عقل'] },
{ word: 'Soul', translation: 'روح', options: ['روح'] },
{ word: 'Heart', translation: 'قلب', options: ['قلب'] },
{ word: 'Emotion', translation: 'عاطفة', options: ['عاطفة'] },
{ word: 'Thought', translation: 'فكر', options: ['فكر'] },
{ word: 'Dream', translation: 'حلم', options: ['حلم'] },
{ word: 'Reality', translation: 'واقع', options: ['واقع'] },
{ word: 'Imagination', translation: 'خيال', options: ['خيال'] },
{ word: 'Creativity', translation: 'إبداع', options: ['إبداع'] },
{ word: 'Innovation', translation: 'ابتكار', options: ['ابتكار'] },
{ word: 'Inspiration', translation: 'إلهام', options: ['إلهام'] },
{ word: 'Motivation', translation: 'تحفيز', options: ['تحفيز'] },
{ word: 'Success', translation: 'نجاح', options: ['نجاح'] },
{ word: 'Failure', translation: 'فشل', options: ['فشل'] },
{ word: 'Challenge', translation: 'تحدي', options: ['تحدي'] },
{ word: 'Opportunity', translation: 'فرصة', options: ['فرصة'] },
{ word: 'Risk', translation: 'مخاطرة', options: ['مخاطرة'] },
{ word: 'Safety', translation: 'سلامة', options: ['سلامة'] },
{ word: 'Health', translation: 'صحة', options: ['صحة'] },
{ word: 'Wellness', translation: 'رفاهية', options: ['رفاهية'] },
{ word: 'Fitness', translation: 'لياقة بدنية', options: ['لياقة بدنية'] },
{ word: 'Exercise', translation: 'تمرين', options: ['تمرين'] },
{ word: 'Nutrition', translation: 'تغذية', options: ['تغذية'] },
{ word: 'Sleep', translation: 'نوم', options: ['نوم'] },
{ word: 'Rest', translation: 'راحة', options: ['راحة'] },
{ word: 'Air', translation: 'هواء', options: ['هواء'] },
{ word: 'Water', translation: 'ماء', options: ['ماء'] },
{ word: 'Fire', translation: 'نار', options: ['نار'] },
{ word: 'Earth', translation: 'أرض', options: ['أرض'] },
{ word: 'Sun', translation: 'شمس', options: ['شمس'] },
{ word: 'Moon', translation: 'قمر', options: ['قمر'] },
{ word: 'Star', translation: 'نجم', options: ['نجم'] },
{ word: 'Cloud', translation: 'سحابة', options: ['سحابة'] },
{ word: 'Love', translation: 'حب', options: ['حب'] },
{ word: 'Peace', translation: 'سلام', options: ['سلام'] },
{ word: 'Hope', translation: 'أمل', options: ['أمل'] },
{ word: 'Happiness', translation: 'سعادة', options: ['سعادة'] },
{ word: 'Success', translation: 'نجاح', options: ['نجاح'] },
 
   ], 
];
 
  let currentLevelIndex = 0;
  let currentWordIndex = 0;
  
  document.addEventListener('DOMContentLoaded', () => {
    displayWord();
  });

  // ... (your existing code)

document.addEventListener('DOMContentLoaded', () => {
  displayWord();
});

// Function to search for a word
function searchWord() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase().trim();

  // Loop through words to find a match
  for (let i = 0; i < levels[currentLevelIndex].length; i++) {
      const word = levels[currentLevelIndex][i].word.toLowerCase();
      if (word.includes(searchTerm)) {
          // Word found, navigate to it
          goToWord(i + 1);
          return;
      }
  }

  // If the word is not found, you can handle it (e.g., display a message)
  alert('Word not found');
}

// ... (your existing code)

  
  function displayWord() {
    const wordElement = document.getElementById('word');
    const optionsContainer = document.getElementById('options-container');
    const userInput = document.getElementById('userInput');
  
    const currentWord = levels[currentLevelIndex][currentWordIndex];
  
    wordElement.textContent = currentWord.word;
  
    // تجهيز الأسئلة كخيارات
    optionsContainer.innerHTML = '';
    currentWord.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => checkAnswer(index));
      optionsContainer.appendChild(button);
    });
  
    // إعادة تعيين حقل الإدخال
    userInput.value = '';
  }
  
  function checkAnswer(selectedIndex) {
    const currentWord = levels[currentLevelIndex][currentWordIndex];
  
    if (selectedIndex === currentWord.options.indexOf(currentWord.translation)) {
      alert('إجابة صحيحة!');
      nextWord();
    } else {
      alert('إجابة خاطئة!');
    }
  }
  function goToWord(wordNumber) {
    // Ensure the wordNumber is within the valid range
    if (wordNumber >= 1 && wordNumber <= levels[currentLevelIndex].length) {
      currentWordIndex = wordNumber - 1;
      displayWord();
    } else {
      alert('Invalid word number');
    }
  }
  function checkUserAnswer() {
    const userInput = document.getElementById('userInput');
    const userAnswer = userInput.value.trim().toLowerCase();
    const currentWord = levels[currentLevelIndex][currentWordIndex];
  
    if (userAnswer === currentWord.translation.toLowerCase()) {
      alert('إجابة صحيحة!');
      nextWord();
    } else {
      alert('إجابة خاطئة!');
    }
  }
  
  function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % levels[currentLevelIndex].length;
    displayWord();
  }
  
  function nextLevel() {
    currentLevelIndex = (currentLevelIndex + 1) % levels.length;
    currentWordIndex = 0;
    displayWord();
  }
  // Check the user's preference for dark mode and set the theme accordingly
document.addEventListener('DOMContentLoaded', () => {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDarkMode) {
      enableDarkMode();
  }
});

// Function to toggle between dark and light mode
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Save the user's preference in localStorage
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode);
}

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add('dark-mode');
}

// Function to disable dark mode
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
}

// Check the user's preference stored in localStorage
const savedDarkMode = localStorage.getItem('dark-mode');

if (savedDarkMode === 'true') {
  enableDarkMode();
} else {
  disableDarkMode();
}
