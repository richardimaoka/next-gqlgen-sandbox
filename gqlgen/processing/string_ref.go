package processing

func stringRef(s string) *string {
	if s == "" {
		return nil
	} else {
		return &s
	}
}